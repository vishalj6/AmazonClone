import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, setloginUser } = useContext(AuthContext);
  // const [error, setError] = useState("");
  const signIn = useSignIn();
  // const isAuth = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);


  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/signin", {
        email,
        password,
      }, { withCredentials: true });
      // console.log("HIII");

      if (response?.status === 201) {
        toast.success('successful', {
          position: "top-center",
        });
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email: email }
        });
        console.log("This is Response data in Sign in", response.data);
        setloginUser(response.data?.user);
        setTimeout(() => {
          navigate("/");
        }, 2000);

      }
    }
    catch (err) {
      console.log(err);
      if (err.response?.status === 401) {
        // console.log(err, err.response?);
        toast.error("Email or Password can't be Empty", {
          position: "top-center",
        });
      }
      else if (err.response?.status === 400) {
        toast.error("Wrong Login credentials", {
          position: "top-center",
        });
      }
      else if (err.response?.status === 402) {
        toast.warn("Email Not Found, SignUp First", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div className="main-div-signin">
        <div className="logo-div">
          <img
            src={require("../../images/amazon_logo_white.png")}
            alt="amazon-logo"
          />
        </div>
        <Link to="/" className="link-to-home">
          Home
        </Link>
        <form action="/signin" method="post" onSubmit={HandleSubmit}>
          <div className="form-div-signin">
            <h2>Sign in</h2>
            <p className="login-signin">Email or phone number</p>
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <div className="mini-form-signin">
              <p>Password</p>
              <p>
                <a href="/">Forgot Password</a>
              </p>
            </div>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            // required
            />
            <button className="sign-in-button-signin" type="submit">
              Sign in
            </button>
            <p className="terms-signin">
              By continuing, you agree to Amazon's{" "}
              <a href="/">Conditions of Use</a> <br /> and{" "}
              <a href="/">Privacy Notice</a>.
            </p>
            <div className="siggned-in">
              <p>
                <input type="checkbox" className="check" /> Keep me signed in.{" "}
                <a href="/">Details</a>
              </p>
            </div>
            <span className="new-signin">New to Amazon?</span>
            <button className="create-account">
              <Link to="/signup" className="link-to-signup">
                Create your Amazon account
              </Link>
            </button>
          </div>
        </form>
        <div className="footer-div-signin">
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

export default Signin;
