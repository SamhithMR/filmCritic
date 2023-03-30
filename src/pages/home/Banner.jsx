import React, { useEffect, useState } from "react"
import Img from '../../components/Img'
import FetchData from '../../hooks/FetchData'
import {BannerSkeleton} from '../../components/Skeleton'

function Banner(){
    const { data, err, loading } = FetchData(`/movie/upcoming`)
    const [image, setImage]=useState('')

    useEffect(()=>{
        setImage(data && data?.results[Math.floor(Math.random() * data?.results?.length)]?.backdrop_path)
    },[data])
    
    return (<div className="banner">
        {(loading || err) ? <BannerSkeleton/> : <Img url={image} alt="Banner image" />}
        <div className="mask"></div>
        <div className="banner_contents">
            <h2>welcome.</h2>
            <p>Million of movies, TV shows and people to discover. Explore now.</p>
            <div className="input_feild">
                <input placeholder="    Search for a movie, tv show, person"></input>
                <button>search</button>
            </div>
        </div>
    </div>)
}
export default Banner