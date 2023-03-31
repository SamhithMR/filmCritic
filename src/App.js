import { Route, Routes } from "react-router-dom"

import './App.css';
import FetchData from './hooks/FetchData'

import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import Search from './pages/search/Search'
import PageNotFound from './pages/pagenotfound/PageNotFound'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  const { data, err, loading } = FetchData(`/movie/550`)


  return (
    <div className="App">

      {/* {loading && <p>Loading...</p>} */}
      {/* {err && <p>{err}</p>} */}
      {/* {data && <p>{JSON.stringify(data)}</p>} */}
      {/* {data && <p>{data?.backdrop_path}</p>} */}

        <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Search/:query" element={<Search />}/>
        <Route path="/Explore/:mediaType" element={<Explore />}/>
        <Route path="/Details" element={<Details />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
        <Footer />

    </div>
  );
}

export default App;
