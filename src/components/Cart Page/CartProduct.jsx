import React from "react";
import "./CartProduct.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const CartProduct = ({ cart_item, fun }) => {


  const options = Array.from({ length: 10 }, (_, index) => index + 1);

  const [selectedValue, setSelectedValue] = useState(cart_item.quantity);
  const { setloginUser } = useContext(AuthContext);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleCartDelete = async (id) => {
    await axios.delete(`http://localhost:3001/deletecart/${id}`, { withCredentials: true })
      .then((result) => {
        setloginUser((prev) => ({ ...prev, [prev.carts]: result.data.updatedCarts }))
        console.log(result.data);
        fun();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card-individual-product">
        <div className="product-div-parent">
          <div className="image-div-left-cart">
            <img
              // style={{width:"180px"}}
              src={cart_item.Images[0]}
              alt="imagee"
            />
          </div>
          <div className="product-info-right-cart">
            <Link style={{ color: "black" }} to={`/buy/${cart_item._id}`}>
              <div className="cart-product-title">
                {cart_item.productTitle}
              </div>
            </Link>
            <div className="discount-area cart-discount-area">
              <button className="discount">17% off</button>&nbsp;&nbsp;
              <span> Kickstarter Deal </span>
            </div>
            <div className="price">
              <b> ₹{cart_item.price} &nbsp;&nbsp;<span className="strike"> M.R.P.:
                ₹{cart_item.mrp} </span></b>
            </div>
            <p className="green">In Stock</p>
            <div className="specifications-cart">
              <p><span>Colour</span> : {cart_item.colorOptions[0]}</p>
              <p><span>Size</span> : 256 GB</p>
            </div>
            <div className="last-cart-div">
              <div className="dropdown-option">
                <select
                  id="myDropdown"
                  value={selectedValue}
                  onChange={handleDropdownChange}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div> | <span style={{ cursor: "pointer" }}><p onClick={() => handleCartDelete(cart_item._id)}>Delete</p></span> | <span><p href="">Save for later</p></span> | <span><p href="">See more like this</p></span> | <span><p href="">Share</p></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;