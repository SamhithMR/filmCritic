import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchData from '../../hooks/FetchData'
import { useParams } from "react-router-dom"
import Card from "../../components/Card"
import { CardSkeleton } from "../../components/Skeleton";
import '../home/home.css'

function Search(){
    const {query} = useParams()
    const [pageNum, setPageNum] = useState(1)
    const [endpoint, setEndpoint] = useState('movie')
    const {data, loading} = fetchData(`/search/${endpoint}?query=${query}&page=${pageNum}`)
    const [items, setItems] = useState([])
    
    useEffect(() => {
      if (!loading && data) {
        setItems((prevItems) => [...prevItems, ...data.results])
      }
    }, [data, loading])

    useEffect(()=>{
        setItems([])
        setPageNum(1)
    },[query,endpoint])

    const fetchmore =() =>{
        setPageNum((prev) => prev + 1)
    }
    
    return (
        <div>
               {items.length > 0 
                ?   <><div>
                        <div style={{width:'90%',display:'flex','justifyContent':'space-between', margin:'1rem auto'}}>
                            <div style={{color:'#fff'}}>{`search ${items.length > 1 ? "results" : 'result'} of '${query}'`}</div>
                            <div style={{backgroundColor:'#fff',padding:'0.2rem',borderRadius:'10px'}}>
                                <button className={"custombutton"} style={{backgroundColor:`${endpoint === 'tv' ? '#bdbdbd' : '#fe5555'}`}} onClick={()=>(setEndpoint('movie'))}>movie</button>
                                <button className={"custombutton"} style={{backgroundColor:`${endpoint === 'tv' ? '#fe5555' : '#bdbdbd'}`}} onClick={()=>(setEndpoint('tv'))}>tv</button>
                            </div>
                        </div>
                        <InfiniteScroll
                        dataLength={items.length}
                        next={fetchmore}
                        hasMore={true}
                        loader={<CardSkeleton/>}
                        className='colwise'
                        >
                        {items?.map((result, i) => <Card result={result} key={i}/>)} 
                        </InfiniteScroll>
                    </div></> 
                : (<span className="resultNotFound">Sorry, Results not found!</span>)}
        </div>
        )
}
export default Search