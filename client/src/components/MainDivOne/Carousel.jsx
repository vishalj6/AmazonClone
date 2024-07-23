import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

const Carousel = () => {

  const [images, setImages] = useState([])  

  useEffect(()=>{
    axios.get("http://localhost:3001/getCarouselImages").then((response)=>{
      setImages(response.data)
    }).catch((err)=>console.log(err))
  },[])

  const ArrayImages = []
  
  images.map((item)=>{
    ArrayImages.push(item.path)
    return ArrayImages
  })

  return (
    <div className="splide2">
      <div>
        <Splide
          aria-label="My Favorite Images"
          className="carousel"
          options={{
            type: "loop",
            autoplay: true,
            pagination: false
          }}
        >
          {ArrayImages.map((item, i) => {
            return (
              <SplideSlide key={i} className="splideStandard main-big ">
                <img src={`http://localhost:3001/images/${item}`} alt="carousel_image" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
