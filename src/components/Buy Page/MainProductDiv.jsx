import React, { useContext, useState, useRef } from "react";
import OfferCard from "./OfferCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ServiceCard from "./ServiceCard";
import ReactImageMagnify from 'react-image-magnify';
import { productContext } from "./Buypage";


import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Radio } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
// import SamllImagePreview from "./SamllImagePreview";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MainProductDiv = () => {
  const product = useContext(productContext);

  const imgRef = useRef(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedItem, setSelectedItem] = useState("Counter");
  const handleChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const colorOptions = product.colorOptions
  const [colorText, setColorText] = useState(colorOptions?.[0]);
  const [ColourChangeHovered, setColourChangeHovered] = useState(true);
  const [headingClick, setheadingClick] = useState(false);
  const Images = product.Images;
  const changedImages = product.changedImages;
  const [ImageSource, setImageSource] = useState(Images?.[0]);
  const offersList = product.offers
  const productServicesImages = product.productServicesImages
  const smallPreviewImages = product.smallPreviewImages
  const sizeVariants = product.sizeVariants
  // const defaultSize = product?.defaultSize
  const [sizeText, setSizeText] = useState("");
  const basicDetails = product?.basicDetails
  const aboutProduct = product?.aboutThisItemList
  const ratingsSection = product.ratingsSection
  const highlyRatedFor = product.highlyRatedFor
  const CarouselImages = product?.CarouselImages
  const productSpecs = product?.productSpecs
  const cameraImages = product?.cameraImages
  const techDetails = product.productDetails1
  const additionalInfo = product.productDetails2
  const carouselCollection = [CarouselImages, productSpecs, cameraImages]
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const finalCarousel = carouselCollection?.filter((item) => {
    return item?.length > 0
  })
  const [selectedValue, setSelectedValue] = React.useState('without-exchange');
  const { setloginUser } = useContext(AuthContext);

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const { productId } = useParams();
  const AddtoCart = async () => {
    // console.log(productId);
    setLoading(true);

    await axios.get(`http://localhost:3001/addtocart/${productId}`, { withCredentials: true })
      .then((result) => {
        setloginUser(result.data.UserWithCarts);
        setLoading(false);
        navigate("/cart");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="parent-product-hr">
        <div className="parent-product-div">
          <div className="product-image-div">
            <div className="image-left-part">
              <div className="small-image-show">
                <div className="smallImagePreview">
                  {ColourChangeHovered
                    ? Images?.map((ele) => {
                      return (
                        <div
                          className="image-preview"
                          onMouseEnter={(e) => setImageSource(e.target.src)}
                        >
                          <img
                            src={ele}
                            alt="mobile_image"
                            id={ele}
                          />
                        </div>
                      );
                    })
                    : changedImages.map((ele) => {
                      return (
                        <div
                          className="image-preview"
                          onMouseEnter={(e) => setImageSource(e.target.src)}
                        >
                          <img
                            src={ele}
                            alt="mobile_image"
                            id={ele}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div
              ref={imgRef}
              className="image-right-part"
              style={{ zIndex: "100" }}
            >
              <ReactImageMagnify
                className="centre-image-magnify"
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src:
                      ImageSource ||
                      `${product.Images?.[0]}`,
                  },

                  largeImage: {
                    src:
                      ImageSource ||
                      `${product.Images?.[0]}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
              <span>Roll over image to zoom in</span>
              {/* <hr /> */}
            </div>
          </div>
          <div className="product-info-div">
            <div className="info-div-left">
              <div className="product-title-div">
                <h2 className="product-title">{product.productTitle}</h2>
                <a href="/" className="product-link">
                  {product.bylineInfo}
                </a>
                <div className="rating-div">
                  <span className="rating-span">
                    {product.Ratings}
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffa31a" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffa31a" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#ffa31a" }}
                    />
                    <i
                      className="fa-regular fa-star-half-stroke"
                      style={{ color: "#ffa31a" }}
                    />
                    <i
                      className="fa-regular fa-star"
                      style={{ color: "#ffa31a" }}
                    />
                  </span>
                  <span className="rating-span-2">
                    <a href="/">{product.RatingsCount}</a> |{" "}
                    <a href="/">{product.answeredQuestions}</a>
                  </span>
                </div>
                <hr />
              </div>
              <div className="product-price-div">
                <span className="sale-span">Great Freedom Sale</span>
                <div className="discount-div">
                  <span className="discount-span">{product.off}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span className="price-span">{product.price}</span>
                </div>
                <div className="mrp-div">
                  <span>M.R.P:</span>
                  <span className="initial-mrp">{product.mrp}</span>
                </div>
                <div className="tax-div">
                  <p>{product.vatMessage_feature_div}</p>
                </div>
              </div>
              <hr />
              <div className="offer-div">
                <div className="offer-title">
                  <img src={require("./../../images/offer.png")} alt="" />
                  <h2>Offers</h2>
                </div>
                <div className="offer-card-div">
                  {offersList?.map((item) => {
                    return (
                      <OfferCard
                        Title={item.Title}
                        ParaText={item.ParaText}
                        aTag={item.aTag}
                      />
                    )
                  })}
                </div>
              </div>
              <hr />
              <div className="product-services-div">
                {productServicesImages?.map((item) => {
                  return (
                    <ServiceCard
                      ImgSrc={`http://localhost:3001/images/${item.Image}`}
                      Text={item.Name}
                    />
                  )
                })}
              </div>
              <hr />
              <div className="product-tech-info">
                <div className="device-colour-options">
                  <p>
                    <span className="device-color">Colour:</span>{" "}
                    {colorText || product.colorOptions?.[0]}
                  </p>
                  <div className="small-product-images">
                    <button
                      className="small-image-preview-button"
                      onMouseOver={(event) => {
                        setColorText(event.target.id);
                        setColourChangeHovered(true);
                        setImageSource(
                          `${product.Images?.[0]}`
                        );


                      }}
                    >
                      <img
                        src={`${smallPreviewImages?.[1]}`}
                        alt="small_device_image"
                        id={product.colorOptions?.[0]}
                      />
                    </button>
                    <button
                      className="small-image-preview-button"
                      onMouseOver={(event) => {
                        setColorText(event.target.id);
                        setColourChangeHovered(false);
                        setImageSource(
                          `${product.changedImages?.[0]}`
                        );
                        console.log(event.target.id);
                      }}
                    >
                      <img
                        src={`${smallPreviewImages?.[0]}`}
                        alt="small_device_image"
                        id={product.colorOptions?.[1]}
                      />
                    </button>
                  </div>
                  <div className="size-variants">
                    <p>
                      <span className="current-size">Size: &nbsp;</span>
                      {sizeText || product?.defaultSize}
                    </p>
                    <div className="size-options">
                      {sizeVariants?.map((item) => {
                        return (
                          <button onClick={() => setSizeText(item)}>
                            {item}
                          </button>

                        )
                      })}
                    </div>
                    <div className="setup-service-div">
                      <p>
                        Phone Setup Service at the time of delivery. Please select
                        convenient setup slot at checkout if available.
                      </p>
                    </div>
                    <div className="product-tech-details">
                      {basicDetails?.map((item) => {
                        return (
                          <>
                            <span>{item.Key}</span>
                            <span>{item.Value}</span>
                          </>
                        )
                      })}
                    </div>
                    <hr />
                  </div>
                  <div className="about-product-div">
                    <div className="about-heading-product">
                      <h1
                        onClick={() => {
                          setheadingClick(!headingClick);
                        }}
                      >
                        About this item
                      </h1>

                      <span className="arrow-change">
                        {headingClick ? (
                          <i style={{ color: "#0e1010" }} className="fa-solid fa-angle-up" />
                        ) : (
                          <i
                            className="fa-solid fa-angle-down"
                            style={{ color: "#0e1010" }}
                          />
                        )}
                      </span>
                    </div>

                    {headingClick && (
                      <ul>
                        {aboutProduct?.map((item) => {
                          return (
                            <li>{item}</li>
                          )
                        })}
                      </ul>
                    )}
                    <div className="incorrect-product-div">
                      <Button onClick={handleOpen} className="ModalButton">
                        <i
                          className="fa-regular fa-message fa-flip-horizontal"
                          style={{ color: "#808080" }}
                        />
                        <span className="toggle-text-modal">
                          {" "}
                          Report incorrect product information{" "}
                        </span>
                      </Button>
                      <div className="wrong-product-div">
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style} className="ModalBox">
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              <div className="modal-title-div">
                                <p>
                                  <h1>Report an issue</h1>
                                </p>
                              </div>
                              <hr />
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              <div className="modal-body">
                                <p>
                                  <h1>Please tell us about the issue.</h1>
                                  <div className="drop-down-div">
                                    <select
                                      className="dropdown-select-div"
                                      name="item-selected"
                                      value={selectedItem}
                                      onChange={handleChange}
                                    >
                                      <option
                                        className="dropdown-option"
                                        value="default"
                                      >
                                        What is wrong with this page?{" "}
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="improvement"
                                      >
                                        Some product information is missing,
                                        inaccurate or could be improved
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="no match"
                                      >
                                        Parts of this page do not match
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="price issue"
                                      >
                                        I have an issue with the price
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="offensive"
                                      >
                                        This product or content is offensive
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="suspicious"
                                      >
                                        This product or content is illegal, unsafe
                                        or suspicious
                                      </option>
                                      <option
                                        className="dropdown-option"
                                        value="other"
                                      >
                                        Other
                                      </option>
                                    </select>
                                  </div>
                                </p>
                              </div>
                            </Typography>
                          </Box>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-div-right">
              <div className="accordion">
                <div className="exchange" style={{ backgroundColor: (selectedValue === "with-exchange") ? "#FFF" : "#ededed" }}>

                  <label htmlFor="exchangeone">
                    With Exchange
                    <span>Up to ₹ {product.price && parseInt(product.price.replace(/,/g, '')) - 7000} off</span>
                  </label>
                  {/* <input type="radio" name='exchange' /> */}

                  <Radio
                    checked={selectedValue === 'with-exchange'}
                    onChange={handleChangeRadio}
                    id='exchangeone'
                    value="with-exchange"
                    className="exchangeradio"
                    name="exchange"
                    inputProps={{ 'aria-label': 'with-exchange' }}
                  />

                  <div style={{
                    display: (selectedValue === "with-exchange") ? "block" : "none"
                  }} className="content">
                    <span>choose phone to exchange</span>
                    <a href="/buy">How does exchange works?</a>
                  </div>
                </div>
                <div className="noexchange" style={{ backgroundColor: (selectedValue === "without-exchange") ? "#FFF" : "#ededed" }}>
                  <label htmlFor="exchangetwo">
                    Without Exchange
                    <span>₹ {product.price} <s>₹ {product.mrp}</s> </span>
                  </label>

                  <Radio
                    checked={selectedValue === 'without-exchange'}
                    onChange={handleChangeRadio}
                    id='exchangetwo'
                    className="exchangeradio"
                    value="without-exchange"
                    name="exchange"
                    inputProps={{ 'aria-label': 'without-exchange' }}
                  />

                  <div style={{
                    display: (selectedValue === "without-exchange") ? "block" : "none",
                    backgroundColor: (selectedValue === "without-exchange") ? "#FFF" : "#ededed"
                  }} className="content2">
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

                        <button onClick={AddtoCart} className="addtocart">
                          {
                            Loading
                              ? (<ClipLoader
                                size={20}
                                color="#FFF"
                                cssOverride={{}}
                                speedMultiplier={0.5}
                              />)
                              : "Add to cart"
                          }

                        </button>
                        <button className="buynow">Buy Now</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr />
      </div>
      <div className="product-buy-info">
        <div className="product-info-head-buy">
          <img src={require("../../images/top_brand.png")} alt="top_brand" />
          <h1>{product.companyName}</h1>
        </div>
        <div className="second-div-buy">
          <div className="rating-div-buy">
            {ratingsSection?.map((item) => {
              return (
                <div className="rating-subdiv-buy">
                  <span>
                    <img
                      src={"https://m.media-amazon.com/images/I/01S5bawZYgL.png"}
                      alt="green_tick"
                    />
                  </span>
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
          <div className="second-div-rating-buy">
            <h1>Highly rated by customers for</h1>
            <div className="rating-satisfaction">
              {highlyRatedFor?.map((item) => {
                return (
                  <div className="sub-satisfaction">
                    <img
                      src={"https://m.media-amazon.com/images/I/01TJnfWJEjL.png"}
                      alt=""
                    />
                    <span>{item}</span>
                  </div>
                )
              })}

            </div>
          </div>
        </div>

        <h1 className="from-the-manufacturer">From the manufacturer</h1>
        {finalCarousel?.map((item) => {
          return (
            <>
              <div className="product-image-carousel">
                <section className="splide3">
                  <div className="product-image-carousel-inner">
                    <Splide
                      aria-label="My Favorite Images"
                      className="product-carousel"
                      options={{
                        type: "loop",
                      }}
                    >
                      {item?.map((item2, i) => {
                        return (
                          <SplideSlide className="splideStandard main-big carousel-image-div ">
                            <img src={item2} alt="device_image" key={i} />
                          </SplideSlide>
                        );
                      })}
                    </Splide>
                  </div>
                </section>
              </div></>
          )
        })}

        <div className="device-information">
          <h2>{product.phoneInfo}</h2>
          <div className="inner-device-information">
            <div className="technical-details">
              <h1>Technical Details</h1>
              <div className="inner-technical-details">

                {techDetails?.map((item) => {
                  return (
                    <>
                      <span>{item[0]}</span>
                      <span>{item[1]}</span>
                    </>
                  )
                })}
              </div>
            </div>
            <div className="additional-information-product">
              <h1>Additional Information</h1>
              <div className="inner-additional-details">

                {additionalInfo?.map((item) => {
                  return (
                    <>
                      <span>{item[0]}</span>
                      <span>{item[1]}</span>
                    </>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Scroll to top
      </div>
    </>
  );
};

export default MainProductDiv;