import LazyLoad from "react-lazy-load"
import noPoster from '../assets/no-poster.png'
import React, { useState } from "react";
import {ImgSkeleton} from './Skeleton'


function Img({ url }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {isLoading && <ImgSkeleton style={{ position: "absolute", top: 0, left: 0, }} />}
      {imageError ? (
        <img src={noPoster} alt="No poster available" />
      ) : (
        <img
          src={"https://image.tmdb.org/t/p/original" + url}
          onLoad={handleImageLoad}
          onError={handleImageError}
          alt="Movie poster"
        />
      )
      }
    </div>
  );
}

export default Img;
