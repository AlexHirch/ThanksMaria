import React, { useState } from "react";
import "./style.scss";
import { Logo } from "../resource";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [imgView, setImgView ] = useState(false)
  return (
    <div className="Navbar">
      <div className={imgView ? "Logo active" : "Logo"}>
        <img onClick={()=>setImgView(true)} src={Logo} alt="" />
        <div onClick={()=>setImgView(false)} className="close"></div>
      </div>
      <h2>Maria-San</h2>
      <div className="links">
      <NavLink to={"/"}>
        <IoHome size={50} color="" />
      </NavLink>
      <NavLink to={"/profile"}>
        <FaRegUserCircle size={50} color="" />
      </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
