import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const randomstring = require("randomstring");
const oneTimePassword = randomstring.generate({
  length: 4,
  charset: "numeric",
});


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [display, setDisplay] = useState("block");
  const [display2, setDisplay2] = useState("none");
  const [otp_array, setotp_array] = useState(new Array(4).fill(""));
  const navigate = useNavigate();

  const handleOTPchange = (element, index) => {
    if (isNaN(element.value)) return false;
    setotp_array([...otp_array.map((d, idx) => (idx === index ? element.value : d))]);
    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const HandleDisplay = (e) => {
    e.preventDefault();
    setDisplay("none");
    setDisplay2("block");
    console.log("On display2");
    axios
      .post("http://localhost:3001/otp", {
        name,
        email,
        oneTimePassword,
      })
      .then((result) => {
        console.log("otp data", result)
      })
      .catch((err) => console.log(err));
  }

  const HandleDisplay2 = (e) => {
    e.preventDefault();
    setDisplay("block");
    setDisplay2("none");
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting");
    const user_otp = otp_array.join("");
    if (JSON.stringify(user_otp) === JSON.stringify(oneTimePassword)) {
      try {
        await axios
          .post("http://localhost:3001/register", {
            name,
            email,
            password,
            mobileNumber,
          }, { withCredentials: true })
          .then((result) => {
            console.log("submit data", result.data);
            navigate("/signin");
          })
          .catch((err) => console.log(err));
      } catch (err) {
        if (err.response.status === 401) {
          // console.log(err, err.response);
          toast.error("User Already Exist", {
            position: "top-center",
          });
        }
      }
    }
    else {
      // console.log(oneTimePassword, user_otp, "nooo");
      toast.warn("OTP Not Matched", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <div className="main-div-signup">
        <div className="logo-div">
          <Link to="/">
            <img
              src={require("../../images/amazon_logo_white.png")}
              alt="amazon-logo"
            />
          </Link>
        </div>
        <div className="form-div-signup" style={{ display: display }}>
          <form method="post" onSubmit={HandleDisplay} >

            <h2>Create Account</h2>
            <p className="login-signup">Your Name</p>
            <input
              type="text"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              placeholder="First name and last name"
              required
            />
            <p className="login-signup">Mobile Number</p>
            <input
              type="tel"
              name="MobileNumber"
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
              required
            />
            <p className="login-signup">Email</p>
            <input
              type="email"
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="mini-form-signin">
              <p>Password</p>
            </div>
            <input
              type="password"
              name="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              required
            />
            <p className="info-signup">
              <i
                className="fa-solid fa-info"
                style={{ color: "#1e7ed2", fontSize: "13px" }}
              ></i>
              &nbsp; Passwords must be at least 6 characters.
            </p>
            <p className="verify-signup">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>
            <button className="sign-in-button-signin">Sign Up</button>
            <p className="terms-signin">
              By continuing, you agree to Amazon's{" "}
              <a href="/">Conditions of Use</a> <br /> and{" "}
              <a href="/">Privacy Notice</a>.
            </p>
            <div className="final-div-signup">
              <hr className="final-div-signup-hr" />
              <p className="last-para">
                Already have an account?
                <Link to="/signin" className="link-to-home">
                  Sign in
                </Link>
              </p>
            </div>
          </form>

        </div>

        <div className="form_otp" style={{ display: display2 }}>
          <form onSubmit={HandleSubmit}>
            <div className="otp_card">
              <h2 className="verify_title"><MarkEmailUnreadIcon fontSize='large' /> Verify Your Email</h2>
              <p className="verify_discription">Please Enter the 6-digit verification code that was sent to your Email Address. The code is valid for 30 Minutes.</p>

              {/* <input type="text" value={user_otp} onChange={(e) => setuser_otp(e.target.value)} id='otp_verification' className='otp_verification' placeholder="Enter a 6 digit otp" /> */}

              <p className="btn_text">Verification Code</p>
              <div className='otpbody'>

                {otp_array.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="number"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={e => handleOTPchange(e.target, index)}
                      onFocus={e => e.target.select()}
                    />
                  );
                })}

                <button type="button" className="clear_icon" onClick={e => setotp_array([...otp_array.map(v => "")])}>
                  <BackspaceIcon />
                </button>
              </div>

              <button type="submit" className="otp_btn">Continue</button>
              <button type="button" onClick={HandleDisplay2} className="go_back">Back</button>
            </div>
          </form>
        </div>

        <div className="footer-div-signup">
          <ul>
            <li>
              <a href="/">Amazon Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
          </ul>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
