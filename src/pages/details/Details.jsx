import './details.css'

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import Img from '../../components/Img'
import FetchData from '../../hooks/FetchData'
import {BannerSkeleton,ImgSkeleton} from '../../components/Skeleton'
import dayjs from 'dayjs'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Details(){
   const {id,mediaType} = useParams()
   const {data, loading} = FetchData(`/${mediaType}/${id}`)
   const credits = FetchData(`/${mediaType}/${id}/credits`)

   const toHoursAndMinutes = (totalMinutes) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

   return (
      <div className='details'>
         {JSON.stringify(credits?.data?.crew?.filter((x)=>x.job == "Director").length)}
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
                                 textSize: '13px',
                              })
                        } 
                        text={`${data?.vote_average * 10}%`}/>
                  </div>
               </div>
               <div className="overview">
                  <h1>Overview</h1>
                  <p>Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.</p>
               </div>
               <div className="status">
                  <p>status: {data?.status ? <span>{data?.status}</span> : <span>{" "}</span>}</p>
                  <p>Runtime: {data?.runtime ? <span> {toHoursAndMinutes(data?.runtime)}</span> : <span>{" "}</span>}</p>
                  <p>release_date: {data?.release_date ? <span> {dayjs(data?.release_date).format("MMM D, YYYY")}</span> : <span>{" "}</span>}</p>
               </div>
               <div className="director">
                  <p>Director:{credits?.data?.crew ? credits?.data?.crew?.filter((x)=>x.job == "Director").map((x)=> {return <span>{JSON.stringify(x.name)}</span>})
                                                   : <span>{" "}</span>}</p>
               </div>
               <div className="writer">
                  <p>Director:{credits?.data?.crew ? credits?.data?.crew?.filter((x)=> x.job === "Screenplay" || x.job === "Story" || x.job === "Writer").map((x)=> {return <span>{JSON.stringify(x.name)}</span>})
                                                   : <span>{" "}</span>}</p>

               </div>
            </div>
         </div>
      </div>
   )
}
export default Details