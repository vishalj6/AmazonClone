import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import "../../CSS/Address.css"
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext'
import { RotateLoader } from "react-spinners";

const Address = () => {
  const [address_array, setAddress_array] = useState([]);
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    get_user();
  }, [currentUser]);


  const get_user = () => {
    axios
      .get("http://localhost:3001/get_user", { withCredentials: true }).then((user) => {
        // console.log(address.data)
        setAddress_array(user.data.address)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const HandleRemove = async (index) => {
    try {
      const response = await axios.post("http://localhost:3001/remove_address", { index }, { withCredentials: true });
      // console.log("AFFF", response);
      if (response.status === 201) {
        get_user();
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 420) {
        toast.error("Can't Delete Default Address", {
          position: "top-center",
        });
      }
    }
  }

  return (
    <>
      <div className="address-div">
        <div className="address-head">

          <ul className='go_back_links'>
            <NavLink to="/account">
              <li className='go_back_li'>Your account</li>
            </NavLink>&gt;
            <NavLink to="/address">
              <li className='go_back_li'>Your addresses</li>
            </NavLink>
          </ul>
          <h1>Your Addresses</h1>
          <div className="address-cards">
            <Link to="/user_add_address">
              <div className="add-address-card">
                <div className="address-add-button">
                </div>
                <h2>Add address</h2>
              </div>
            </Link>

            {
              (address_array && Object.keys(address_array).length) ?
                address_array.map((oneadd, index) => {
                  return (
                    <div className="other_address_card">
                      {
                        oneadd.defaultAddressCheck
                          ? (<div className="other_address_card_default">
                            <p>Default:</p> <div className="amazon_logo"></div>
                          </div>)
                          : (<div className="other_address_card_notdefault"></div>)
                      }
                      <div className="other_data_container">
                        <div className='other_address_card_data'>
                          <ul>
                            <li> <p className='Address_user_name'>{oneadd.fullName} </p></li>
                            <li> {oneadd.firstAddressField} </li>
                            <li> {oneadd.secondAddressField} </li>
                            <li> {oneadd.townCity + ", " + oneadd.state + " " + oneadd.pinCode} </li>
                            <li> {oneadd.country} </li>
                            <li> Phone Number : {oneadd.mobileNumber} </li>
                            <li> <span className='other_address_span'>Add delivery instructions </span> </li>

                          </ul>
                        </div>
                      </div>
                      <div className="edit_remove">
                        <span className='other_address_span'>Edit</span>
                        <span>&nbsp; &nbsp;|&nbsp; &nbsp;</span>
                        <span className='other_address_span' onClick={() => HandleRemove(index)}>Remove</span>
                      </div>
                    </div>
                  )
                })
                :
                (<RotateLoader
                  color="#e2ad21"
                  cssOverride={{}}
                  speedMultiplier={0.7}
                />)
            }

          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Address