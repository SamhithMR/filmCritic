import Card from './Card'
import React, {useState } from "react"
import { CardSkeleton } from "./Skeleton.js"

function Carosel({data,loading,heading, endpoints, setEndpoint, endpoint}){
    return (
    <div className="popular">
        <div className="cards_heading">
            <h1>{heading}</h1>
            <div className="buttons">
                <button style={{"background":`${endpoint == 'movie' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setEndpoint(endpoints[0]))}>{endpoints[0]}</button>
                <button style={{"background":`${endpoint == 'movie' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setEndpoint(endpoints[1]))}>{endpoints[1]}</button>
            </div>
        </div>
        <div className="cards">
            {!loading 
            ? (data?.results.map((result, i) => <Card result={result} key={i}/>)) 
            :  ([1,2,3,4,5,6].map((_, i) => (<CardSkeleton key={i} />)))
            }
        </div>
    </div>
    )
}
export default Carosel