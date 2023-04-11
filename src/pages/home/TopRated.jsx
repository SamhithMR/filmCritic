import FetchData from "../../hooks/FetchData"
import React, {useState } from "react"
import Carosel from "../../components/carosel"
import './home.css'

function TopRated(){
    const [endpoint, setendPoint] = useState('movie')
    const { data, loading } = FetchData(`/${endpoint}/top_rated`)
    return(
        <div className="trending">
            <div className="trending_header">
                <h5>Top Rated</h5>
                <div className="switchTabs">
                    <button style={{"background":`${endpoint === 'tv' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setendPoint('movie'))}>movie</button>
                    <button style={{"background":`${endpoint === 'tv' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setendPoint('tv'))}>tv</button>
                </div>
            </div>
            <Carosel data={data && data} loading={loading} mediaType={endpoint}/>
        </div>
        )
}
export default TopRated