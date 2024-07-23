import React from 'react'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import products from "./ProductData";
import './MaterialHomeCarousel.css'
import { Divider } from '@mui/material';
// import { NavLink } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const MaterialHomeCarousel = () => {
    return (
        <div className='carousel-one'>
            <div className="title1">
                <ul>
                    <li><h3 className="top">Inspired by your Wish List</h3></li>
                    <li className="leftmargin"><a href="/" className="deals">See more</a></li>
                </ul>
            </div>
            <Divider/>
            <div className="products_section">
                <Carousel
                    responsive={responsive}
                    infinite={false}
                    draggable={false}
                    swipeable={true}
                    centerMode={true}
                    // autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    showDots={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container">
                    {
                        products.map((e,index) => {
                            return (
                                // <NavLink to={`/getproductsone/${e.id}`}>
                                <div key={index} className="products_items">
                                    <div className="product_img">
                                        <img src={e.url} alt="product" />
                                    </div>
                                </div>
                                // </NavLink>
                            )
                        })
                    }

                </Carousel>
            </div>
        </div>
)}

export default MaterialHomeCarousel