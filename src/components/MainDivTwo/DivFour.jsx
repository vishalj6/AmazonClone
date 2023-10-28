import React from "react";
import MainCard from "../MainDivOne/MainCard";

const DivFour = () => {
  return (
    <div className="div-three">
      <MainCard
        ClassName="leftmargin"
        h3="Under ₹499 | Pocket-friendly"
        h3two="fashion"
        ImageOneSource={require("../../images/fa1.jpg")}
        ImageOneSpanText="Clothing"
        ImageTwoSource={require("../../images/fa2.jpg")}
        ImageTwoSpanText="Backpacks"
        ImageThreeSource={require("../../images/fa3.jpg")}
        ImageThreeSpanText="Footwear"
        ImageFourSource={require("../../images/fa4.jpg")}
        ImageFourSpanText="Four"
      />
      <MainCard
        h3="Fire TV streaming devices"
        ImageOneSource={require("../../images/s1.jpg")}
        ImageOneSpanText="Fire TV Stick 4k"
        ImageTwoSource={require("../../images/s2.jpg")}
        ImageTwoSpanText="Fire TV Stick"
        ImageThreeSource={require("../../images/s3.jpg")}
        ImageThreeSpanText="All-new Fire TV Cube"
        ImageFourSource={require("../../images/s4.jpg")}
        ImageFourSpanText="Fire TV Stick lite"
      />
      <MainCard
        h3="Up to 60% off | Tools & home"
        h3two="improvement"
        ImageOneSource={require("../../images/h1.jpg")}
        ImageOneSpanText="Spin mops, Wipes & more"
        ImageTwoSource={require("../../images/h2.jpg")}
        ImageTwoSpanText="Drill machines, tool kits &"
        ImageTwoSpanTextOne="more"
        ImageThreeSource={require("../../images/h3.jpg")}
        ImageThreeSpanText="Bathroom Accessories"
        ImageFourSource={require("../../images/h4.jpg")}
        ImageFourSpanText="Extension boards, plugs &"
        ImageFourSpanTextOne="more"
      />
      <div className="one marginright">
        <h3>Everyday grocery products</h3>
        <h3>Amazon Launchpad</h3>
        <div className="add">
          <img src = {require("../../images/coffee.jpg")} width="100%" alt="image_1" />
        </div>
        <div className="foot1">
          <p>
            <a href="/">Visit the store</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DivFour;
