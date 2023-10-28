import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import { Badge, Menu, MenuItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { makeStyles } from "@mui/styles";
import { AuthContext } from "../../../context/AuthContext";


const usestyle = makeStyles({
  component: {
    marginTop: 10,
    marginRight: "0px",
    width: "300px",
    padding: "50px",
    // height: "300px"
  },
})

const NavbarUlRight = ({ user }) => {
  // const isAuth = useIsAuthenticated();
  const { setloginUser } = useContext(AuthContext);
  const signOut = useSignOut();
  const navigate = useNavigate();

  const classes = usestyle();

  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false)
  };

  const handleLogout = () => {
    handleClose();
    signOut();
    setloginUser(null);
    navigate("/signin");
  }

  return (
    <ul className="right-l">
      <li>
        <a href="/">
          <span className="center">
            <img
              src="https://img.icons8.com/color/48/null/india.png"
              width="25%"
              alt="aa"
            />
            &nbsp;EN
            <i className="fa fa-sort-desc" />
          </span>
        </a>
      </li>
      <li>
        {
          user
            ? (
              <div className="menu_div">
                <div onClick={handleClick}>
                  <p>
                    <span className="span-text">Hello, {user?.name ? user?.name : "Sign in"} </span>
                  </p>
                  <p className="bold">
                    Accounts &amp; Lists&nbsp;
                    <i className="fa fa-sort-desc" />
                  </p>
                  <p />
                </div>
                <Menu
                  anchorEl={open}
                  open={Boolean(open)}
                  onClose={handleClose}
                  className={classes.component}
                >
                  <MenuItem onClick={handleClose} style={{ margin: 10 }}>
                    <Link to="/account">
                      My account
                    </Link>
                  </MenuItem>
                  {user?.name ? <MenuItem onClick={handleLogout} style={{ margin: 10 }}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />   Logout</MenuItem> : ""}
                </Menu>
              </div>
            )
            : (<Link to='/signin'>
              <p>
                <span className="span-text">Hello, {user?.name ? user?.name : "Sign in"} </span>
              </p>
              <p className="bold">
                Accounts &amp; Lists&nbsp;
                <i className="fa fa-sort-desc" />
              </p>
              <p />
            </Link>
            )
        }
      </li>
      <li>
        <Link to={user ? "/your_orders" : "/signin"}>
          <p>
            <span className="span-text">Returns</span>
          </p>
          <p className="bold">&amp; Orders</p>
          <p />
        </Link>
      </li>
      <li className="cartt">
        <Link to={user ? "/cart" : "/signin"}>
          <span className="cartt">
            {/* <i className="fa-solid fa-cart-shopping" /> */}
            <ShoppingCartTwoToneIcon />
            <Badge className="badge" badgeContent={user?.carts?.length} color="primary" />
            &nbsp;Cart
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUlRight;
