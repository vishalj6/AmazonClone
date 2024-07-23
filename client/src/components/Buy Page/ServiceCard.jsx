import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="service-card-div">
       <div className="card-image-div center">
       <img src = {props.ImgSrc} alt="service_image" />
       </div>
       <div className="card-para-div">
       <p> {props.Text} </p>

       </div>
    </div>
  )
}

export default ServiceCard