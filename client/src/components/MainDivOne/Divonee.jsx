import React from "react";
import DivOneLeft from "./DivOneLeft";
import MainCard from "./MainCard";

const Divonee = () => {
  return (
    <div className="div-one">
      <DivOneLeft
        h3="Up to 70% off | Clearance store"
        ImgSource={require("../../images/zz1.jpg")}
      />
      <MainCard
        h3="Revamp your home in style"
        ImageOneSource={require("../../images/sub1.jpg")}
        ImageOneSpanText="Bedsheets, curtains &amp; more"
        ImageTwoSource={require("../../images/sub2.jpg")}
        ImageTwoSpanText="Home Decoration"
        ImageThreeSource={require("../../images/sub3.jpg")}
        ImageThreeSpanText="Home Storage"
        ImageFourSource={require("../../images/sub4.jpg")}
        ImageFourSpanText="Lighting Solutions"
      />
      <MainCard
        h3="Automotive essentials | Up to "
        h3two = "60% Off"
        ImageOneSource={require("../../images/z1.jpg")}
        ImageOneSpanText="Cleaning Accessories"
        ImageTwoSource={require("../../images/z2.jpg")}
        ImageTwoSpanText="Tyre &amp; rim care"
        ImageThreeSource={require("../../images/z3.jpg")}
        ImageThreeSpanText="Helmets"
        ImageFourSource={require("../../images/z4.jpg")}
        ImageFourSpanText="Vaccum Cleaner"
      />
      <div className="four">
        <div className="sign-in">
          <h2>Sign in for your best experience</h2>
          <span className="login-button">
            <button>Sign in Securely</button>
          </span>
        </div>
        <div className="laptop-image">
          <img src={require("../../images/laptop.jpg")} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default Divonee;
