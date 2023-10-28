import React from "react";
import SubCard from "./SubCard";

const MainCard = (props) => {
  return (
    <div className='one'>
      <h3>{props.h3}</h3>
      <h3>{props.h3two}</h3>
      <div className="div-two">
        <SubCard
          ImageSource={props.ImageOneSource}
          SpanText={props.ImageOneSpanText}
          SpanTextOne={props.ImageOneSpanTextOne}
        />
        <SubCard
          ImageSource={props.ImageTwoSource}
          SpanText={props.ImageTwoSpanText}
          SpanTextOne={props.ImageTwoSpanTextOne}
        />
        <SubCard
          ImageSource={props.ImageThreeSource}
          SpanText={props.ImageThreeSpanText}
          SpanTextOne={props.ImageThreeSpanTextOne}
        />
        <SubCard
          ImageSource={props.ImageFourSource}
          SpanText={props.ImageFourSpanText}
          SpanTextOne={props.ImageFourSpanTextOne}
        />
      </div>
      <div className="foot">
        <p>
          <a href="/">See more</a>
        </p>
      </div>
    </div>
  );
};

export default MainCard;
