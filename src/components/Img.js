import LazyLoad from "react-lazy-load"
import noPoster from '../assets/no-poster.png'
import React, { useState } from "react";

function Img({ url }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {imageError ? (
       <img src={noPoster}/>
      ) : (
        <LazyLoad>
          <img
            src={"https://image.tmdb.org/t/p/original" + url}
            onError={handleImageError}
            alt="Movie poster"
          />
        </LazyLoad>
      )}
    </>
  );
}

export default Img;


// function Img({ url }) {
//   const imageUrl = url
//     ? "https://image.tmdb.org/t/p/origina" + url
//     : noPoster;

//   return (
//     <LazyLoad>
//       <img src={imageUrl} alt="" />
//     </LazyLoad>
//   );
// }

// export default Img