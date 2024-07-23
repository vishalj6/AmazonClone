import { useState, useContext, useEffect } from 'react';
import './CartPage.css'
import axios from 'axios';
import CartProduct from './CartProduct';
import RightSideCart from './RightSideCart.jsx';
import { BeatLoader } from 'react-spinners';
import { AuthContext } from "../../context/AuthContext";


export const Cart = () => {
  const [isLoaded, set_isLoaded] = useState(false);
  const [buyitagain, set_buyitagain] = useState("no-items");
  const [carts, setCarts] = useState();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    get_carts();
  }, [currentUser]);

  const get_carts = async () => {
    set_isLoaded(false);
    await axios.get("http://localhost:3001/cartdetails", { withCredentials: true })
      .then((result) => {
        set_isLoaded(true);
        // console.log(result.data);
        setCarts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let products = [
    {
      photo: 'https://images-eu.ssl-images-amazon.com/images/I/61REJkkYbwL._AC_UL200_SR200,200_.jpg',
      name: "E-Cosmos Refrigerator Stand, Washing Machine Stand, Furniture Base Stand, Fridge Stands for Single Door and Double Door (Pack of 4) (Grey), Medium",
      rate: 4.5,
      price: 149.00
    },
    {
      photo: 'https://images-eu.ssl-images-amazon.com/images/I/81ejw-nL3aL._AC_UL200_SR200,200_.jpg',
      name: "Elite Products Front Load Washing Machine Cover Suitable for 6.5 kg, 7kg & 7.5 KG (Fits for IFB,LG,Samsung) Waterproof & Dustproof (GREY AND BLACK)",
      rate: 4.5,
      price: 495.00
    },
    {
      photo: 'https://images-eu.ssl-images-amazon.com/images/I/41w-je6e5bS._AC_UL200_SR200,200_.jpg',
      name: "Stylista Waterproof Front Load Washing Machine Cover Compatible for LG 8 kg & 9 Kg Grey",
      rate: 3.9,
      price: 499.00
    }
  ]

  return (
    <>
      {
        isLoaded ? (
          <div className='BODY'>
            <div className="CART-main-body-div">
              <div className="CART-left-section-div">
                <div className="CART-your-cart CART-box">
                  <div className="CART-inner-div">

                    {
                      (carts && (Object.keys(carts).length)) ? (<div className="heading-cart-top">
                        <h1>Shopping Cart</h1>
                        <a href="/">Deselect all items</a>
                        <hr />
                      </div>)
                        : ""
                    }
                    {
                      (carts && (Object.keys(carts).length))
                        ? (
                          carts.map((onecart) => {
                            // console.log("ONE",onecart);
                            return (
                              <div key={onecart._id}>
                                <CartProduct cart_item={onecart} fun={get_carts} />
                              </div>
                            )
                          })
                        )
                        : (<div className="CART-inner-div-first">
                          <h2>Your Amazon Cart is empty.</h2>
                          <p>
                            Your shopping cart is waiting. Give it purpose - fill it with groceries, clothing, household supplies, electronics and more.<br></br>Continue shopping on the <a href='https://www.amazon.in/ref=ord_cart_empty'>Amazon.in homepage</a>, learn about <a href='https://www.amazon.in/gp/goldCART-box/ref=ord_cart_empty'>today's deals</a>, or visit your <a href='https://www.amazon.in'>Wish List</a>.
                          </p>
                        </div>)
                    }
                  </div>
                </div>
                <div className="CART-your-items CART-box">
                  <div className="CART-inner-div">
                    <h3>Your Items</h3>
                    <div className="CART-links-list-div">
                      <ul className='CART-links-list-ul'>
                        <li>
                          <button onFocus={() => set_buyitagain("no-items")}>No items saved for later</button>
                        </li>
                        <li>
                          <button onFocus={() => set_buyitagain("buy-again")}>Buy it again</button>
                        </li>
                      </ul>
                    </div>
                    <div className="buy_it_again">
                      {
                        buyitagain === "no-items"
                          ? (
                            <div>
                              <p>
                                Not available.
                              </p>
                            </div>)
                          : (
                            <div className="CART-right-section-div">
                              <ul className="CART-cards">
                                {products.map((i, index) => {
                                  return (
                                    <li className="CART-card" key={index}>
                                      <div className="CART-photo">
                                        <img src={i.photo} alt='img'></img>
                                      </div>
                                      <div className="CART-product-info">
                                        <a className="CART-product-link" href='/'>{i.name}</a>
                                        <span className="CART-product-price">₹{i.price}</span>
                                        <button className="CART-add-to-cart-button">Add to Cart</button>
                                      </div>
                                    </li>
                                  )
                                })
                                }
                              </ul>
                            </div>

                          )
                      }
                    </div>
                  </div>
                </div>
                <div className="CART-extra-info">
                  <div className="CART-">
                    The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                    <br></br>Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
                  </div>
                </div>
              </div>
              <div className="main_right_div">
                <RightSideCart carts={carts} />
              </div>
            </div>
          </div>) : (
          <BeatLoader
            color={"orange"}
            loading={!isLoaded}
            cssOverride={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              margin: "0 auto",
              borderColor: "red",
            }}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )
      }
    </>
  );
};

export default Cart;