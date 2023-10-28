import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CarouselCard from "./CarouselCard";
import {Link} from "react-router-dom"

import Items from "./CarouselItems"

const FirstCarouselBody = () => {
  return (
    <>
      <Splide aria-label="My Favorite Images" options={{
            type: "loop",
            autoplay: true,
            pagination: false
          }}>
        {Items.map((item,index)=>{
          return(
            <SplideSlide key={index} className="splideStandard">
              <Link to={`/buy/${item.productId}`}>
              <CarouselCard
                ImageUrl={item.ImageUrl}
                Discount={item.Discount}
                DiscountItemText={item.DiscountItemText}
                Price={item.Price}
                StrikeSpanText={item.StrikeSpanText}
                ParaText={item.ParaText}
              />
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </>
  );
};

export default FirstCarouselBody;