import React from "react";
import { Link } from "react-router-dom";

const NavbarUl = ({ user }) => {
  // console.log(Object.keys(currentUser?.address).length);
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <>
      <ul className="left-list">
        <li>
          <Link to="/">
            <img
              src={require("../../../images/amazon_a.png")}
              alt="amazon-logo"
              className="amazon"
            />
          </Link>
        </li>
        <li>
          <div className="address_span">
            <i className="fa-solid fa-location-dot" />
            <div className="address_span_text">

              <p className="hello-span">
                <span className="span-text">{user?.name ? `Deliver to ${user?.name.split(' ')[0]}` : "Hello"}</span>
              </p>
              <p className="nav-location">
                {
                  (user?.address && Object.keys(user?.address).length) ? user?.address.map((oneadd) => {
                    if (oneadd.defaultAddressCheck) {
                      return (capitalizeFirst(oneadd.townCity) + " " + oneadd.pinCode)
                    }
                    return ""
                  })
                    : "Select your address"
                }
              </p>{" "}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavbarUl;
