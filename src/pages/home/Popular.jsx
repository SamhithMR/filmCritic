import FetchData from "../../hooks/FetchData"
import Card from '../../components/Card'
import React, {useState } from "react"
import { CardSkeleton } from "../../components/Skeleton.js"

function Popular(){
    const [endpoint, setendPoint] = useState('movie')
    const { data, loading } = FetchData(`/${endpoint}/popular`)
    return (<div className="popular">
    <div className="cards_heading">
        <h1>popular</h1>
        <div>
            <button style={{"background":`${endpoint == 'movie' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setendPoint('movie'))}>movie</button>
            <button style={{"background":`${endpoint == 'movie' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setendPoint('tv'))}>tv</button>
        </div>
    </div>
    <div className="cards">
        {!loading ? 
        (
            data?.results.map((result, i) => <Card result={result} key={i}/>)

        ) 
        :  (
            [1,2,3,4,5,6].map((_, i) => (
                <CardSkeleton key={i} />
            )))
        }
    </div>
    </div>)
}
export default Popular