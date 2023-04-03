import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { MultiSelect } from "react-multi-select-component";

import Card from "../../components/Card"
import { CardSkeleton } from "../../components/Skeleton";
import fetchData from '../../hooks/FetchData'
import '../home/home.css'

function Explore(){
    const {mediaType} = useParams()
    const [pageNum, setPageNum] = useState(1)
    const [filter, setFilter] = useState("")
    const [selected, setSelected] = useState([]);
    const {data, loading} = fetchData(`/discover/${mediaType}?page=${pageNum}&sort_by=${filter}&with_genres=${selected.reduce((x,y)=>(x + `,${y.value}`),"")}`)
    const [items, setItems] = useState([])
    const options = useSelector((state) => state.home.genres)


    useEffect(() => {
        if (!loading && data) {
            setItems((prevItems) => [...prevItems, ...data?.results])
        }
      }, [data, loading])
      
      
      useEffect(()=>{
        setItems([])
        setPageNum(1)
    },[mediaType,filter,selected])
    
    return (
        <div>
                <><div>
                        <div style={{width:'90%',display:'flex','justifyContent':'space-between', margin:'1rem auto'}}>
                            <div style={{color:'#fff'}}>{`explore ${mediaType}`}</div>
                            <div className="explore_selector">
                                <MultiSelect
                                    style={{border:'none', borderRadius:'10px',padding:'1rem'}}
                                    hasSelectAll={false}
                                    options={options}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select gener"
                                    className="abc"
                                />
                                <select name="filter" id="filter" onChange={(e)=>(setFilter(e.target.value))}>
                                    <option value="popularity.desc">Popularity Descending</option>
                                    <option value="popularity.asc">Popularity Ascending</option>
                                    <option value="vote_average.desc">Rating Descending</option>
                                    <option value="vote_average.asc ">Rating Ascending</option>
                                    <option value="primary_release_date.desc">Release Date Descending</option>
                                    <option value="primary_release_date.asc">Release Date Ascending</option>
                                    <option value="original_title.asc">Title (A-Z)</option>
                                </select>
                            </div>
                        </div>
                        <InfiniteScroll
                        dataLength={items.length}
                        next={() => (setPageNum((prev) => prev + 1))}
                        hasMore={true}
                        loader={<CardSkeleton/>}
                        className='colwise'
                        >
                        {items?.map((result, i) => <Card result={result} key={i}/>)} 
                        </InfiniteScroll>
                    </div></> 
               {(!loading && items.length < 0)&& <div className="resultNotFound">sorry results not found</div>}
        </div>
        )
}
export default Explore