import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"

function TopRated(){
    const [endpoint, setendPoint] = useState('movie')
    const { data, loading } = FetchData(`/${endpoint}/top_rated`)
    const setEndpoint= (value) =>{
        setendPoint(value)
    }
    return(
        <Carosel heading={"Top Rated"} data={data} loading={loading} endpoint={endpoint} endpoints={['movie','tv']} setEndpoint={setEndpoint}/>
        )
    }
    
export default TopRated