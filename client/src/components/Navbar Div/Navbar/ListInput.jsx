import React from "react";

const ListInput = () => {
  return (
    <div className="list-input">
      <span className="drop center">
        All&nbsp;
        <i className="fa-solid fa-caret-down"/>
      </span>
      <input type="text" className="input" placeholder="Search for Products" />
      <span className="search center">
        <i className="fa-solid fa-magnifying-glass" />
      </span>
    </div>
  );
};

export default ListInput;
