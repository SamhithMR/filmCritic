import './details.css'

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import Img from '../../components/Img'
import FetchData from '../../hooks/FetchData'
import {BannerSkeleton,ImgSkeleton} from '../../components/Skeleton'
import dayjs from 'dayjs'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Card from '../../components/Card'

import play_png from '../../assets/play.png'
import VideoPopUp from '../../components/videoPopUp'
import ChatbotApp from '../../components/openAI'

import { useSelector, useDispatch } from 'react-redux'
import {getApi} from '../../store/homeSlice'

function Details(){
   const {id,mediaType} = useParams()
   const {data, loading} = FetchData(`/${mediaType}/${id}`)
   const credits = FetchData(`/${mediaType}/${id}/credits`)
   const video= FetchData(`/${mediaType}/${id}/videos`);
   const similarMovie= FetchData(`/${mediaType}/${id}/similar`);
   const Recommendations= FetchData(`/${mediaType}/${id}/recommendations`);

   const dispatch = useDispatch()
   
   const [isVisible, setIsVisible] = useState(false);
   const [videoId, setVideoID] = useState(false);

   const [apiInput, setApiInput] = useState("")

   const handleToggle = () => {
     setIsVisible(!isVisible);
   };

   const count = useSelector((state) => state.home.API_KEY)

   const toHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

   return (
      <>
      {/* <p>{video?.data?.results?.[0].key}</p> */}
      {isVisible ?<VideoPopUp handleToggle={handleToggle} videoId={videoId}/>: ""}
      <div className='details'>
         {/* background */}
         <div className='mask1' />
         <div className='mask2' />
         <div className="banner_image">{loading ? <BannerSkeleton/> : <Img url={data?.backdrop_path} alt="Banner image" />}</div>

         {/* details */}
         <div className='Details_banner'>
            <div className='details_poster'>
               {loading ? <ImgSkeleton/> : <Img url={data?.backdrop_path} alt="Banner image" />}
            </div>
            <div className='details_contents'>
               <div className="details_title">
                     {`${data && data?.title || data?.name  } (${dayjs(data?.release_date ).format("YYYY")})`}
               </div>
               <div className="details_subtitle">
                  {data?.tagline}
               </div>
               <div className="detail_tabs">
                  <div className="rating">
                     <CircularProgressbar
                        maxValue={10} 
                        value={data?.vote_average} 
                        background
                        backgroundPadding={6}
                        styles={
                              buildStyles({
                                 backgroundColor: 'transparent',
                                 textColor: "#fff",
                                 pathColor: `${data?.vote_average > 6.5  ? "#389438" : data?.vote_average < 3.0 ? "#fe5555" : "#658ac5"}`,
                                 trailColor: "transparent",
                                 textSize: '13px'
                              })
                        } 
                        text={`${data?.vote_average * 10}%`}/>
                  </div>
                  <div className='video_button'>
                  <img src={play_png} onClick={() => { handleToggle(); setVideoID(video?.data?.results?.[0].key) }} style={{ "cursor": "pointer" }} className="play_icon" alt="" />
                     {/* {isVisible ?<VideoPopUp handleToggle={handleToggle} videoId={video?.data?.results?.[0].key}/>: ""} */}
                  </div>
               </div>
               <div className="overview">
                  <h1>Overview</h1>
                  <p>{data?.overview ? <span className="res">{data?.overview}</span> : <span className="res">{" "}</span>}</p>
               </div>
               <div className="status">
                  <p>status: {data?.status ? <span className="res">{data?.status}</span> : <span className="res">{" "}</span>}</p>
                  <p>Runtime: {data?.runtime ? <span className="res"> {toHoursAndMinutes(data?.runtime)}</span> : <span className="res">{" "}</span>}</p>
                  <p>release_date: {data?.release_date ? <span className="res"> {dayjs(data?.release_date).format("MMM D, YYYY")}</span> : <span className="res">{" "}</span>}</p>
               </div>
               <div className="director">
                  <p>Director: {credits?.data?.crew ? credits?.data?.crew?.filter((x)=>x.job == "Director")
                                                                         .map((x,i)=> {return <span className="res">{i > 0 ? ", " : ""}{x.name}</span>})
                                                   : <span className="res">{" "}</span>}</p>
               </div>
               <div className="writer">
                  <p>writer: {credits?.data?.crew ? credits?.data?.crew?.filter((x)=> x.job === "Screenplay" || x.job === "Story" || x.job === "Writer")
                                                                       .map((y,i)=> {return  <span className="res">{i > 0 ? ", " : ""}{y.name}</span>})
                                                   : <span className="res">{" "}</span>}</p>

               </div>
            </div>
         </div>
      </div>
      <div className='openAI'>
         <h6>Viewers Sentiment Analysis <span>(by chatGPT)</span></h6>
         {count ? <ChatbotApp prompt={data && data?.title || data?.name}/> : 
            <form className="form" onSubmit={(e)=>{e.preventDefault(); dispatch(getApi(apiInput))}}>
               <div className="input">
                  <label for="api-key">API Key:</label>
                  <input type="text" value={apiInput} onChange={(e)=>(setApiInput(e.target.value))} placeholder='paste you API Key here' required />
                  <button type="submit">Submit</button>
               </div>
               <div className="instructions">
                  <div>
                     <p>Instructions:</p>
                     <ul>
                        <li>Get your API key from the website.</li>
                        <li>Paste your API key into the form field above.</li>
                        <li>Click the "Submit" button.</li>
                        <li>The sentiment of the viewers will be displayed below.</li>
                        <li>To delete the API key, refresh the page or close the browser window.</li>
                     </ul>
                  </div>
                  <div>
                     <p>Token Usage:</p>
                     <ul>
                        <li>The API key will give you access to a limited number of tokens per month.</li>
                        <li>The number of tokens used will depend on the length and complexity of your requests.</li>
                        <li>Make sure to use the API key wisely and not waste tokens on unnecessary requests.</li>
                        <li>If you exceed the monthly limit, you will have to wait until the next month to use the API again.</li>
                     </ul>
                  </div>
                  <div>
                     <p>Free Trial:</p>
                     <ul>
                        <li>You can get a free trial of the ChatGPT API by signing up on the website.</li>
                        <li>The free trial will give you access to a limited number of tokens for a limited time.</li>
                        <li>Make sure to check the website for more information on the free trial.</li>
                     </ul>
                  </div>
               </div>
            </form>
         }
         

         <div id="sentiment"></div>

      </div>
      <div className="videos_container">
         <h6 className="videos_heading">Related Videos</h6>
         <div className="videos">
            {video?.data?.results?.map((x)=> {
               return(
                  <div className='video' onClick={()=>{handleToggle();setVideoID(x.key)}} >
                     <img src={`https://img.youtube.com/vi/${x.key}/mqdefault.jpg`}/>
                     <img src={play_png}  style={{ "cursor": "pointer" }} className="play_icon" alt="" />
                  </div>
               )
            })}
         </div>
      </div>
      <div className='casts_container'>
        <h5>Top Casts</h5>
        <div className='casts'>
           {credits?.data?.cast && credits?.data?.cast?.map((x)=> {
             return (
               <div className='cast'>
                  <div className="cast_img">
                     <div className="xyz">
                        <Img url={x.profile_path} />
                     </div>
                  </div>
                  <div className='cast_details'>
                     <h5>{x.name}</h5>
                     <span className="res">{x.character}</span>
                  </div>
               </div>)
           })}
        </div>
      </div>
      <div>
      <div className="popular" >
         <h6>Similar Movies</h6>
        <div className={`cards`}>
            {similarMovie?.data?.results?.map((result, i) => <Card result={result} mediaType={mediaType} key={i}/>) }
        </div>
      </div>
      <div className="Recommendations" >
         <h6>Recommendations</h6>
        <div className={`cards`}>
            {Recommendations?.data?.results?.map((result, i) => <Card result={result} mediaType={mediaType} key={i}/>) }
        </div>
      </div>
      </div>
      </>
   )
}
export default Details