import React from 'react'
import MainCard from "../MainDivOne/MainCard";


const DivThree = () => {
  return (
    <div className="div-three">
      <MainCard
        h3="Upgrade your home | Amazon"
        h3two = "Brands &amp; more"
        ImageOneSource={require("../../images/cl1.jpg")}
        ImageOneSpanText="Up to 50% off | Home"
        ImageOneSpanTextOne = "appliances"
        ImageTwoSource={require("../../images/cl2.jpg")}
        ImageTwoSpanText="Up to 55% off | Bedsheets"
        ImageTwoSpanTextOne = "&amp; more"
        ImageThreeSource={require("../../images/cl3.jpg")}
        ImageThreeSpanText="Starting ₹169 | Containers"
        ImageThreeSpanTextOne = "&amp; more"
        ImageFourSource={require("../../images/cl4.jpg")}
        ImageFourSpanText="Starting ₹229 | Photo"
        ImageFourSpanTextOne="frames,clocks &amp; more"
      />
    <div className="one">
        <h3>Up to 50% off | Monitor Blood</h3>
        <h3>sugar at home</h3>
        <div className="add">
        <img src={require("../../images/pharmacy.jpg")} width="100%" alt="image_1" />
        </div>
        <div className="foot1">
        <p>
            <a href="/">Visit the store</a>
        </p>
        </div>
    </div>
    <MainCard
        h3="Up to 60% off | Professional"
        h3two = "tools, testing &amp; more"
        ImageOneSource={require("../../images/t1.jpg")}
        ImageOneSpanText="Professional Tools"
        ImageTwoSource={require("../../images/t2.jpg")}
        ImageTwoSpanText="Measuring Instruments"
        ImageThreeSource={require("../../images/t3.jpg")}
        ImageThreeSpanText="Cleaning Supplies"
        ImageFourSource={require("../../images/t4.jpg")}
        ImageFourSpanText="Medical Supplies"
      />
    <MainCard
        h3="Up to 60% off | Styles for men"
        ImageOneSource={require("../../images/m1.jpg")}
        ImageOneSpanText="Clothing"
        ImageTwoSource={require("../../images/m2.jpg")}
        ImageTwoSpanText="Footwear"
        ImageThreeSource={require("../../images/m3.jpg")}
        ImageThreeSpanText="Watches"
        ImageFourSource={require("../../images/m4.jpg")}
        ImageFourSpanText="Bags and luggages"
      />
      </div>
  )
}

export default DivThree;