import React from 'react'
import {changeImage} from  "../../productdiv.js"



const ProductDiv = () => {
  return (
    <div>
  <h2>Image Zoom effect</h2>
  <div className="container-productdiv">
    <div className="pictures-productdiv">
      <img id="pic1" onMouseOver={changeImage('../../images/product_image1.jpg', 1)} src={require("../../images/product_image1.jpg")} alt="product_image" />
      <img id="pic2" onMouseOver={changeImage('../../images/product_image2  .jpg', 2)} src={require("../../images/product_image2.jpg")} alt="product_image" />
      <img id="pic3" onMouseOver={changeImage('../../images/product_image3.jpg', 3)} src={require("../../images/product_image3.jpg")} alt="product_image" />
      <img id="pic4" onMouseOver={changeImage('../../images/product_image4.jpg', 4)} src={require("../../images/product_image4.jpg")} alt="product_image" />
      <img id="pic5" onMouseOver={changeImage('../../images/product_image5.jpg', 5)} src={require("../../images/product_image5.jpg")} alt="product_image" />
      <img id="pic6" onMouseOver={changeImage('../../images/product_image6.jpg', 6)} src={require("../../images/product_image6.jpg")} alt="product_image" />
    </div>
    <div className="picture-productdiv" id="picture">
      <div className="rect" id="rect" />
      <img id="pic" src="img/product_image1.jpg" alt="product_image" />
    </div>
    <div className="zoom" id="zoom" />
  </div>
</div>

  )
}

export default ProductDiv