<div className="info-div-right">
                <div className="accordion">
                    <div className="exchange">
                        <label htmlFor="exchangeone">
                            With Exchange
                            <span>Up to ₹ 60,000 off</span>
                        </label>
                        {/* <input type="radio" /> */}

                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" name='exchange' id='exchangeone' control={<Radio />} />
                            </RadioGroup>
                        </FormControl>

                        <div className="content">
                            <span>choose phone to exchange</span>
                            <a href="/buy">How does exchange works?</a>
                        </div>
                    </div>
                    <div className="noexchange">
                        <label htmlFor="exchangetwo">
                            Without Exchange
                            <span>₹ 60,000 <s>₹ 90,000</s> </span>
                        </label>
                        <input type="radio" name='exchange' id='exchangetwo' checked />

                        <div className="content2">
                            <a href="/buy">Free delivery</a>
                            <span>Wednesday 9, Aug</span>
                            <a href="/buy">Details</a>

                            <div className="content2-div1">
                                <p>Or fastest delivery <span>Monday, 7 August. </span> Order within <span className="time">8 hrs 17 mins. </span></p>
                                <a href="/buy">Details</a>
                            </div>
                            <div className="content2-div1">
                                <a href="/buy"><i class="fa fa-location-dot"></i>Select delivery location</a>
                            </div>
                            <div className="content2-div1">
                                <span className="stock">In Stock</span>
                                <p>
                                    Sold by <a href="/buy">Darshita Electronics</a> and <a href="/buy">Fulfilled by Amazon.</a>
                                </p>
                            </div>

                            <div className="content2-div2">
                                <p><span>Add a protection plan.</span></p>
                                <label htmlFor="care">
                                    <input type="checkbox" name="care" id="care" value='care' />
                                    <span className="additional"> OnePlusCare 1year Accidental Damage Protection Plan 1 (Email Delivery, No Physical Kit) for ₹2,299.00</span>
                                </label>

                                <label htmlFor="damage">
                                    <input type="checkbox" name="damage" id="damage" />
                                    <span className="additional"> OnePlusCare 1year Accidental Damage Protection Plan 1 (Email Delivery, No Physical Kit) for ₹2,299.00</span></label>

                                <label htmlFor="protection">
                                    <input type="checkbox" name="protection" id="protection" />
                                    <span className="additional"> OnePlusCare 1year Accidental Damage Protection Plan 1 (Email Delivery, No Physical Kit) for ₹2,299.00</span></label>
                                <div className="cartbtn">

                                    <div className="addtocart">
                                        <a href="/">Add to cart</a>
                                    </div>
                                    <div className="buynow">
                                        <a href="/">Buy Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>








// css
.info-div-right .accordion {
    background-color: #FFFFFF;
    /* height: auto; */
    /* min-width: 100%; */
    z-index: 1;
    cursor: pointer;
}

.accordion .exchange {
    border: 1px solid rgba(164, 164, 164, 0.5);
    background-color: #ffffff;
    border-bottom: 0px;
    border-radius: 10px 10px 0 0;
    margin: 0px 0px 0px 2px;
    padding: 10px 18px;
}

.accordion .noexchange {
    background-color: #ffffff;
    border: 1px solid rgba(164, 164, 164, 0.5);
    border-radius: 0 0 7px 7px;
    margin: 0px 0px 0px 2px;
    padding: 10px 18px;
}

.exchange label,
.noexchange label {
    font-weight: 600 !important;
    display: inline-block;
    cursor: pointer;
    line-height: 120%;
    position: relative;
}

.exchange label span,
.noexchange label span {
    display: block;
    color: #B12704;
}

.noexchange label s {
    color: black;
    opacity: 0.8;
    margin-left: 5px;
    display: inline;
    text-decoration: line-through;
}


.exchange input[type="radio"],
.noexchange input[type="radio"] {
    float: right;
    transform: scale(1.3);
    transition: all 5s ease-in-out;
}

.exchange .content,
.noexchange .content2 {
    transition: all 3s ease-in-out;
    display: none;
}

.content span {
    display: inline-block;
    margin: 15px 3px;
    background-color: #FFFFFF !important;
    border: 1px solid rgba(121, 121, 121, 0.5);
    filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.2));
    border-radius: 5px;
    padding: 5px 10px;
}

.content a {
    display: block;
}

.content2 {
    display: inline-block;
    padding: 7px 3px;
    margin: 5px 0px;
    font-size: 14px;
}

.content2 a {
    font-size: 14px;
}

.content2 span {
    display: inline-block;
    font-weight: bold;
    margin: 0px 4px 0px 4px;
}

.content2-div1 {
    margin: 15px 0px;
}

.content2-div1 span,
.content2-div1 p,
.content2-div2 span {
    margin: 0px;
    display: inline;
}

.content2-div2 {
    padding: 7px 0px;
}

.content2-div2 .additional{
    color: #007185;
    display: inline;
}

.content2-div2 .additional:hover{
    text-decoration: underline;
}

.content2-div2 label {
    display: inline-block;
    margin: 3px 0px;
}

.content2 .time {
    font-weight: normal;
    color: green;
}

.content2 .stock {
    font-size: large;
    font-weight: normal;
    display: block;
    color: green;
    margin-bottom: 5px;
}

.content2-div2 .cartbtn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    color:black;
}

.content2-div2 .addtocart{
    color:black;
    margin: 5px 0px;
    background-color: #f7ca00;
    padding: 2px 2px;
    text-align: center;
    border-radius: 20px;
    height: 29px;
    width: 205px;
    cursor: pointer;
}

.content2-div2 .buynow{
    margin: 7px 0px;
    border-radius: 20px;
    background-color: #ffa41c;
    color:black;
    text-align: center;
    height: 29px;
    width: 205px;
    cursor: pointer;
}

#exchangeone:checked~.content,
.exchange {
    display: block;
}

#exchangetwo:checked~.content2 {
    display: block;
}

.exchange:hover,
.noexchange:hover {
    background-color: #ededed;
}

/* .exchange:focus,
.noexchange:focus {
    background-color: #FFFFFF;
} */
