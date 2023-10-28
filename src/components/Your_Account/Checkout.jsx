import React from 'react'
import './Checkout.css'
import { Link } from 'react-router-dom';
function Checkout() {
    return (
        <>
            <div className="CKO-checkout-comp">
                <div className="CKO-checkout-comp-inner">
                    <div className="CKO-header">
                        <Link to="/">
                            <div>
                                <img src="https://static.vecteezy.com/system/resources/previews/019/017/437/original/amazon-logo-free-png.png" alt="" />
                            </div>
                        </Link>
                        <center>
                            <h1>Checkout</h1>
                        </center>
                    </div>
                    <hr className='CKO-hr'></hr>

                    <div className="CKO-main">

                        <div className="CKO-left-section">
                            <div className="CKO-sub-sections">
                                <div className="CKO-sub-section-1">
                                    <h2>1&nbsp;&nbsp;&nbsp; Delivery address </h2>
                                    <p>
                                        Dev DarshanKumar shah
                                        E/9,Anand Flat, near telephone
                                        exchang,vasna, Ahemdabad
                                        Vasna
                                        AHMEDABAD, GUJARAT 380007
                                    </p>
                                    <p>
                                        <a href="/">Change</a>
                                    </p>
                                </div>
                                <hr className='CKO-hr'></hr>
                                <div className="CKO-sub-section-2">
                                    <h2>2&nbsp;&nbsp;&nbsp; Select a payment method</h2>
                                    <div className="CKO-payment-methods">
                                        <form action="">
                                            <div className='CKO-method-selection'>
                                                <input type="radio" name="method" value='Credit or Debit card' /> Credit or Debit card <br></br>
                                                <input type="radio" name="method" value='Netbankig' /> Netbankig <br></br>
                                                <input type="radio" name="method" value='Other UPI Apps' /> Other UPI Apps <br></br>
                                                <input type="radio" name="method" value='Cash on Delivery/Pay on Delivery' /> Cash on Delivery/Pay on Delivery <br></br>
                                            </div>
                                            <div className="CKO-use-this-payment-method">
                                                <input type="submit" value="Use This Payment Method" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <hr className='CKO-hr'></hr>
                                <div className="CKO-sub-section-3">
                                    <h2>3&nbsp;&nbsp;&nbsp; Offers</h2>
                                </div>
                                <hr className='CKO-hr'></hr>
                                <div className="CKO-sub-section-4">
                                    <h2>4&nbsp;&nbsp;&nbsp; Items and delivery</h2>
                                </div>
                                <hr className='CKO-hr'></hr>
                                <div className="CKO-sub-section-help">
                                    <p>
                                        Need help? Check our <a href="https://www.amazon.in/gp/help/customer/display.html/ref=chk_help_helpfooter_pri?ie=UTF8&nodeId=200507630">help pages</a>  or <a href="https://www.amazon.in/gp/help/contact-us/general-questions.html/ref=chk_help_contactfooter_pri">contact us</a>  <br></br>
                                    </p>
                                    <p>
                                        When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card, debit card or net banking), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.<br></br>
                                    </p>
                                    <p>
                                        See Amazon.in's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=chk_help_returnsfooter_pri?ie=UTF8&nodeId=201149900">Return Policy</a> .
                                    </p>
                                    <p>
                                        Need to add more items to your order? Continue shopping on the <a href="/">Amazon.in homepage</a> .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="CKO-right-section">
                            <div className="CKO-order-summary-box">
                                <div className="CKO-osb-top-sectoin">
                                    <button>Use this payment method</button>
                                    <p>
                                        Choose a payment method to continue checking out. You will still have a chance to review and edit your order before it is final.
                                    </p>
                                    <hr className='CKO-hr'></hr>
                                </div>
                                <div className="CKO-osb-middle-sectoin">
                                    <table className="CKO-order-summary-table">
                                        <tbody>
                                            <tr>
                                                <td><b>Order Summary</b></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Items:</td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td>Delivery:</td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td>Total:</td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td>Promotion Applided:</td>
                                                <td>--</td>
                                            </tr>
                                            <tr>
                                                <td><b>Order Total:</b></td>
                                                <td>--</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="CKO-osb-bottom-sectoin">
                                <ul>
                                    <li>
                                        <a href="https://www.amazon.in/gp/help/customer/display.html/ref=chk_help_shipcosts_pri?ie=UTF8&nodeId=200522630">How are delivery costs calculated?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;