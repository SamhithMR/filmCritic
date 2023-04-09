import { Route, Routes } from "react-router-dom"

import './App.css';
import fetchDataFromApi from './utils/fetchDataFromApi'

import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import Search from './pages/search/Search'
import PageNotFound from './pages/pagenotfound/PageNotFound'

import Header from './components/header'
import Footer from './components/footer'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { getGenres } from "./store/homeSlice";
import ChatbotApp from './components/openAI'

function App() {

  const dispatch = useDispatch()
  const data = []

  useEffect(() => {
      ['movie','tv'].map((endpoint)=>{
          fetchDataFromApi(`/genre/${endpoint}/list`)
          .then((res)=>{res.genres.forEach((x)=>data.push({'value':x.id,'label':x.name}))})
          .then(()=>{ if(endpoint == 'tv') dispatch(getGenres(data))
          })
          .catch((err)=>{console.log(err.message);})
        })
    },[])


  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Search/:query" element={<Search />}/>
          <Route path="/explore/:mediaType" element={<Explore />}/>
          <Route path="/Details/:mediaType/:id" element={<Details />}/>
          <Route path="/ChatbotApp" element={<ChatbotApp />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
