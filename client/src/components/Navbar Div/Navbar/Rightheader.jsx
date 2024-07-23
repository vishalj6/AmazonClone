import React, { useContext } from 'react'
import "./rightheader.css";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useSignOut } from 'react-auth-kit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { AuthContext } from '../../../context/AuthContext';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


const Rightheader = ({ user, logclose }) => {
    const signout = useSignOut();
    const { setloginUser } = useContext(AuthContext);
    const account = user;
    return (
        <div className="rightheader">
            <div className="right_nav">
                {
                    account ?
                        <Avatar className="avtar2"
                            title={account?.name.split()[0].toUpperCase() || "User"}>{account?.name.split("")[0].toUpperCase()}</Avatar> :
                        <Avatar className="avtar"
                        />
                }
                {account ? <h3>Hello, {account.name.toUpperCase()}</h3> : ""}
            </div>
            <div className="nav_btn" onClick={() => logclose()}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop By Category</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 10 }}>Today's Deal</NavLink>
                {
                    <NavLink to={account ? "/your_orders" : "/signin"}>Your Order</NavLink>
                }

                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <div className="cartt">
                        <ShoppingCartTwoToneIcon />
                        <Badge className="badge" badgeContent={user?.carts?.length} color="primary" />
                    </div>
                    <NavLink to={account ? "/cart" : "/signin"}>Cart</NavLink>
                </div>

                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <SettingsIcon />
                    <NavLink to={account ? "/account" : "/signin"}>Settings</NavLink>
                </div>

                {
                    account
                        ? <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <span className='logoutbtn' onClick={() => {
                                signout();
                                setloginUser(null);
                            }}>Log Out</span>
                        </div>
                        : (<div className='flag'>
                            <LoginIcon />
                            <NavLink to="/login">Sign in</NavLink>
                        </div>)}
            </div>
        </div>
    )
}

export default Rightheader
