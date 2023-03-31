import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"

function Popular(){
    const [endpoint, setendPoint] = useState('movie')
    const { data, loading } = FetchData(`/${endpoint}/popular`)
    const setEndpoint= (value) =>{
        setendPoint(value)
    }
    return(
        <Carosel heading={"popular"} data={data} loading={loading} endpoint={endpoint} endpoints={['movie','tv']} setEndpoint={setEndpoint}/>
        )
    }
    
export default Popular