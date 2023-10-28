import React from 'react'

const CarouselCard = (props) => {
  return (
    <div className="carousel-card">
      <div className="carousel-image">
        <img src={props.ImageUrl} alt="mobile" />
      </div>
      <div className="discount-area">
        <button className="discount">{props.Discount}</button>&nbsp;&nbsp;<span> {props.DiscountItemText} </span>
      </div>
      <div className="price">
        <p> {props.Price} &nbsp;&nbsp;<span className="strike"> {props.StrikeSpanText} </span></p>
        <span className="samsung"> {props.ParaText} </span>
      </div>
    </div>
  )
}

export default CarouselCard;