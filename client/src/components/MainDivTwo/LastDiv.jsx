import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../CSS/index.css'

const LastDiv = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/get_user", { withCredentials: true })
      .then((result) => {
        setData(result.data.name);
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        {data ? (
          ""
        ) : (
          <div className="last-div">
            <p>See personalized recommendations</p>
            <Link to="/signin" className="sign-in-button">
              Sign in
            </Link>
            <p>
              New Customer?{" "}
              <span>
                <Link to="/signup">Start here</Link>
              </span>
            </p>
          </div>
        )}
         <div className="back-to-top" onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          Scroll to top
      </div>
      </div>
    </>
  );
};

export default LastDiv;
