import React from 'react'

const DivOneLeft = (props) => {
  return (
    <div className="one leftmargin">
        <h3>{props.h3}</h3>
        <div className="add">
          <img src={props.ImgSource} alt="Image_1" />
        </div>
        <div className="foot">
          <p>
            <a href="/">See more</a>
          </p>
        </div>
      </div>
  )
}

export default DivOneLeft