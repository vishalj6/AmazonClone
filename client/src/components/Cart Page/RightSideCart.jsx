import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './RightSideCart.css'
import { Link, useNavigate } from 'react-router-dom';

const RightSideCart = ({ carts }) => {
    const navigate =useNavigate();
    const [val, setVal] = useState(false);

    const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [carts]);

    const totalAmount = () => {
        let price = 0
        carts && carts.map((item) => {
            price += parseInt(item.price.replace(/,/g, ''))
            return price
        });
        setPrice(price)
    }
    return (
        <div className="right_side_payment">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery.<br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <p className='right_subtotal'>Subtotal ({carts && Object.keys(carts).length} items):
                    <span style={{ fontSize: "18px", fontWeight: "700" }}> ₹{price}.00</span></p>
                <button onClick={()=>navigate("/checkout")} className="rightbuy_btn">
                    Proceed to Buy
                </button>
                <div className="emi" onClick={() => setVal(!val)}>
                    <div className='emibtn'> Emi available
                        {val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </div>
                    <div>
                        <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
                            Jewelry, Gift cards and Amazon pay balance top up). Learn more</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightSideCart