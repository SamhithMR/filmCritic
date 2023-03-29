import LazyLoad from "react-lazy-load"

function Img({url}){
    return(<LazyLoad height={762}>
    <img src={"https://image.tmdb.org/t/p/original"+url} />
  </LazyLoad>)
}
export default Img