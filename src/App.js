import { Route, Routes } from "react-router-dom"

import './App.css';

import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import Search from './pages/search/Search'
import PageNotFound from './pages/pagenotfound/PageNotFound'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Search" element={<Search />}/>
        <Route path="/Explore" element={<Explore />}/>
        <Route path="/Details" element={<Details />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      
    </div>
  );
}

export default App;
