import { NavLink } from "react-router-dom";
import "./Your_Account.css";


export const Your_Account = () => {
  let acc = [
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png",
      heading: "Your Orders",
      about: "track, return, or buy things again",
      link: "/your_orders"
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png",
      heading: "Login & Security",
      about: "Edit Login, name and mobile number",
      link: ""
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png",
      heading: "Prime",
      about: "View benifits and payment settings",
      link: ""
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png",
      heading: "Your Address",
      about: "Edit address for orders and gifts",
      link: "/address"
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png",
      heading: "Payment Options",
      about: "Edit or add payment methods",
      link: ""
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png",
      heading: "Amazon Pay balance",
      about: "add money to your balance",
      link: ""
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png",
      heading: "Contact Us",
      about: " ",
      link: ""
    },
    {
      card_link: "",
      icon: "https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg",
      heading: "Amazon Business",
      about: "Save up to 28% with GST invoice and bulk discounts, purchase on credit, and more",
      link: ""
    },
  ];

  return (
    <div className="YT-BODY">
      <div className="YT-your-account-comp">
        <div className="YT-main-div">
          <div className="YT-main-div-title">Your Account</div>
          <div className="YT-cards">
            {acc.map((i, index) => {
              return (
                <div key={index}>
                  <NavLink to={i.link} className="YT-card">
                    <div className="YT-card-icon">
                      <img src={i.icon} alt="ERROR" />
                    </div>
                    <div className="YT-card-info">
                      <div className="YT-card-heading">{i.heading}</div>
                      <div className="YT-card-about">{i.about}</div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Your_Account;