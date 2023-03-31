import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"

function Trending(){
    
    const [endpoint, setendPoint] = useState('day')
    const setEndpoint= (value) =>{
        setendPoint(value)
    }
    
    const [endpoint2, setendPoint2] = useState('movie')
    const setEndpoint2= (value) =>{
        setendPoint2(value)
    }
    const { data, loading } = FetchData(`/trending/${endpoint2}/${endpoint}`)
    return(
        <Carosel heading={"Trending"} data={data} loading={loading} endpoint={endpoint} endpoint2={endpoint2} endpoints={['day','week', 'movie', 'tv']} setEndpoint2={setEndpoint2} setEndpoint={setEndpoint}/>
        )
    }
    
export default Trending