import React from 'react'

const OfferCard = (props) => {
  return (
    <div className="offer-div-card">
        <h2 className="offer-div-title"> {props.Title} </h2>
        <p className="offer-div-para"> {props.ParaText} </p>
        <a href="/"> {props.aTag} </a>
    </div>
  )
}

export default OfferCard