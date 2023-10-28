import React from "react";

const SubCard = (props) => {
  return (
    <div className="card">
      <img src={props.ImageSource} alt="image_1" />
      <span>{props.SpanText}</span>
      <span>{props.SpanTextOne}</span>
    </div>
  );
};

export default SubCard;
