import React, { useContext, useEffect, useState } from "react";
import NavbarUlLeft from "./NavbarUlLeft";
import ListInput from "./ListInput";
import NavbarUlRight from "./NavbarUlRight";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Rightheader from './Rightheader';
import "./rightheader.css";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const Navbar = () => {

  // const [liopen, setLiopen] = useState(true);
  const [dropen, setDropen] = useState(false);
  const [user, setUser] = useState(null);

  const handelopen = () => {
    setDropen(true);
  }

  const handleClosedr = () => {
    setDropen(false)
  }

  const get_user = async () => {
    await axios
      .get("http://localhost:3001/get_user", { withCredentials: true })
      .then((result) => {
        setUser(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    get_user();
  }, [currentUser]);

  return (
    <div className="top-bar">
      <IconButton className="hamburgur" onClick={handelopen}>
        <MenuIcon style={{ color: "#fff" }} />
      </IconButton>
      {/* here define the right header */}
      <Drawer open={dropen} onClose={handleClosedr} >
        <Rightheader logclose={handleClosedr} user={user} />
      </Drawer>
      <NavbarUlLeft user={user} />
      <ListInput user={user} />
      <NavbarUlRight user={user} />
    </div>
  );
};

export default Navbar;
