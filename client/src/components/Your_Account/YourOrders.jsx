import { NavLink } from 'react-router-dom'
import "./YourOrders.css"
import { useState } from 'react';

function YourOrders() {
    let d = new Date()
    const [FilterYear, serFilterYear] = useState(d.getFullYear())
    let your_orders_data = {
        "orders": {
            "number_of_orders": [
                {
                    "key": 2023,
                    "value": 1
                },
                {
                    "key": 2022,
                    "value": 1
                },
                {
                    "key": 2021,
                    "value": 0
                },
                {
                    "key": 2020,
                    "value": 1
                }
            ],
            "list_of_orders": [
                {
                    "order_placed_date": 19,
                    'order_placed_month': 'March',
                    "order_placed_year": 2023,
                    "order_total": 37999,
                    "order_ship_to": "Vishal", /* Update This field by Backend */
                    "oredr_id": '402-3380147-8381912',
                    "order_products": [
                        {
                            "product_image": "https://m.media-amazon.com/images/I/41W0dAnmX9L._SX300_SY300_QL70_FMwebp_.jpg",
                            "product_name": "OnePlus Nord 3 5G (Misty Green, 16GB RAM, 256GB Storage)",
                            "product_price": 37999,
                            "product_return_window_closed_on": "01-Apr-2023",
                            "product_page_link": "https://www.amazon.in/OnePlus-Misty-Green-256GB-Storage/dp/B0C7VCB59Z/?_encoding=UTF8&content-id=amzn1.sym.b5a625fa-e3eb-4301-a9e2-f9c8b3e7badf%3Aamzn1.symc.36bd837a-d66d-47d1-8457-ffe9a9f3ddab&ref_=pd_gw_ci_mcx_mr_hp_atf_m&th=1",
                            "product_review_wirte_page_link": "Write review link",
                        },
                    ],
                    "order_archive_link": "Archive link"
                },
            ]
        },
        "buy_again": "",
        "not_yet_shipped": "",
        "cancelled_orders": "",
    }

    return (
        <>
            <div className="YO-your-orders-comp">
                <div className="YO-your-orders-inner">
                    <div className="YO-your-orders-page-path">
                        <ul className='go_back_links'>
                            <NavLink to="/account">
                                <li className='go_back_li'>Your account</li>
                            </NavLink>&gt;
                            <NavLink to="/your_orders">
                                <li className='go_back_li'>Your Orders</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="YO-your-orders-header">
                        <h1 className="YO-your-orders-title">Your Orders</h1>
                        <form>
                            <div className="YO-search-orders">
                                <span>
                                    🔍
                                </span>&nbsp;
                                <input type="text" name='search_order' placeholder="Search all Orders" />
                            </div>
                            <button >Search Orders</button>
                        </form>
                    </div>
                    <div className="CART-links-list-div">
                        <ul className='CART-links-list-ul'>
                            <li><button>Orders</button> </li>
                            <li><button>Buy Again</button> </li>
                            <li><button>Not Yet Shipped</button> </li>
                            <li><button>Cancelled Orders</button> </li>
                        </ul>
                    </div>
                    <div className="YO-your-orders-tab-content">
                        <>
                            <div className="YO-orders-orders">
                                <div className="YO-your-orders-filter">
                                    <b>Orders </b>placed in
                                    <select onChange={(e) => { serFilterYear(e.target.value) }}>
                                        {
                                            your_orders_data["orders"]["number_of_orders"].map((y) => {
                                                return (
                                                    <>
                                                        <option value={y.key}>{y.key}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                {
                                    your_orders_data["orders"]["list_of_orders"].map((i) => {
                                        if (i.order_placed_year === FilterYear) {
                                            let total = 0;
                                            i.order_products.map((j) => {
                                                total = total + j.product_price
                                                return total
                                            })
                                            return (
                                                <>
                                                    <div className="YO-orders-order">
                                                        <div className="YO-order-details">
                                                            <div className='YO-order-cell'>
                                                                ORDER PALCED<br></br>
                                                                {i.order_placed_date} {i.order_placed_month} {i.order_placed_year}
                                                            </div>
                                                            <div className='YO-order-cell'>
                                                                TOTAL<br></br>
                                                                ₹{total}.00
                                                            </div>
                                                            <div className='YO-order-cell-second-last'>
                                                                SHIP TO<br></br>
                                                                {i.order_ship_to}
                                                            </div>
                                                            <div className='YO-order-cell'>
                                                                ORDER # {i.oredr_id}<br></br>
                                                                <a href='/'>View order details</a> | <a href="/">Invoice</a>
                                                            </div>
                                                        </div>
                                                        <hr className="YO-hr"></hr>
                                                        <div className="YO-order-products">
                                                            {
                                                                i.order_products.map((j) => {

                                                                    return (
                                                                        <div className="YO-order-product">
                                                                            <div className="YO-order-product-image">
                                                                                <img src={j.product_image} alt="" />
                                                                            </div>
                                                                            <div className="YO-order-product-info">
                                                                                <div>
                                                                                    <a className='YO-order-product-name' href={j.product_page_link}>{j.product_name}</a>
                                                                                </div>
                                                                                <div className='YO-order-product-return-info'>
                                                                                    Return window closed on {j.product_return_window_closed_on}
                                                                                </div>
                                                                                <div>
                                                                                    <a className='YO-order-product-view-item' href={j.product_page_link}>View Your Item</a>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <a className='YO-order-product-write-review' href={j.product_page_link}>Write&nbsp;a&nbsp;product review</a>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <hr className="YO-hr"></hr>
                                                        <div >
                                                            <a className="YO-order-archive-order" href='/'>Archive Order</a>
                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <>
                                                    <div style={{ textAlign: 'center' }}>
                                                        <small>
                                                            Looks like you did not place an order in {FilterYear}
                                                        </small>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </>
                    </div>
                </div>
            </div>

        </>
    )
}
export default YourOrders;