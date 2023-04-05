import Card from './Card'
import React, {useState } from "react"
import { CardSkeleton } from "./Skeleton.js"

function Carosel({data,loading,heading, endpoints, setEndpoint, setEndpoint2,endpoint2 ,endpoint, className}){
    return (
    <div className="popular" >
        <div className="cards_heading">
            <h1>{heading}</h1>
            <div className="buttons">
                <button style={{"background":`${endpoint == 'day' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setEndpoint(endpoints[1]))}>{endpoints[1]}</button>
                <button style={{"background":`${endpoint == 'day' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setEndpoint(endpoints[0]))}>{endpoints[0]}</button>
            </div>
            {
                endpoints.length == 4 && (<div className="buttons">
                <button style={{"background":`${endpoint2 == 'movie' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setEndpoint2(endpoints[3]))}>{endpoints[3]}</button>
                <button style={{"background":`${endpoint2 == 'movie' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setEndpoint2(endpoints[2]))}>{endpoints[2]}</button>
            </div>)
            }
        </div>
        
        <div className={`cards ${className}`}>
            {!loading 
            ? (data?.results.map((result, i) => <Card result={result} mediaType={endpoint2} key={i}/>)) 
            :  ([1,2,3,4,5,6].map((_, i) => (<CardSkeleton key={i} />)))
            }
        </div>
    </div>
    )
}
export default Carosel