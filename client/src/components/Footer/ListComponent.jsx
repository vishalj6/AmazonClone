import React from "react";

const ListComponent = (props) => {
  return (
    <div className={props.ClassName}>
      <ul>
        {props.List.map((item, index) => {
          return (
            <li key={index} >
              <a href="/">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComponent;
