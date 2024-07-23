import React from "react";
import DivThree from "./DivThree";
import FirstCarousel from "./FirstCarousel";
import MaterialHomeCarousel from "./MaterialHomeCarousel";
import DivFour from "./DivFour";
import LastDiv from "./LastDiv";

// document.querySelector("#back-to-top").addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

const MainDivTwo = () => {
  return (
    <div className="main-div-long">
      <DivThree />
      <MaterialHomeCarousel/>
      <FirstCarousel />
      <DivFour />
      <LastDiv/>
    </div>
  );
};

export default MainDivTwo;
