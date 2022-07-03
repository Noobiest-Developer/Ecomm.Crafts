import React from "react";
import './NavBar.css'
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Left_Menu from "./LeftSideRespNav";

const NavBar = () => {
const history = useNavigate();
  return(
    <div className="NavBar-Wrapper">
        <div className="NavBar-ContentType">
       <NavLink to="/Ingredients" className={isActive=> "NavBar-LinkEle" + (!isActive ? "" : " ActiveEle-NavBar")} >
        Ingredients
        </NavLink>
       <NavLink to="/Products" className={isActive=> "NavBar-LinkEle" + (!isActive ? "" : " ActiveEle-NavBar")} >
        Products
        </NavLink>
        </div>
        <div className="NavBar-SearchBarWrapper">
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search .."
        inputProps={{ 'aria-label': 'search' }}
      />
        </div>
    <div className="NavBar-LoginOptions">
    <NavLink to="/Login" className={isActive=> "NavBar-LinkEle" + (!isActive ? "" : " ActiveEle-NavBar")} >
        Login
        </NavLink>
    <NavLink to="/SignUp" className={isActive=> "NavBar-LinkEle" + (!isActive ? "" : " ActiveEle-NavBar")} >
        SignUp
        </NavLink>
    </div>
    <div className="NavBar-AccountOptions">
  <AccountCircleIcon />
    </div>
    </div>
  )

}

const AccountOptions = () =>{
  return(
    <div className="AccountOptions-Wrapper">
       <AccountCircleIcon 
            sx={{ 
              height:'45px',
              width:'45px',
              cursor:'pointer'
            }} 
            onClick={(e)=>{ 
              var x = document.getElementById("AccountOptionsMenuContainer");
              if(x ){
                if(x.classList.contains("Hide")) x.classList.remove("Hide");
                else x.classList.add("Hide");
              }
            }}
            />
            <div className="AccountOptionsMenuContainer Hide" id="AccountOptionsMenuContainer" >
              <div className="AccountOptionsEle" >
                Profile
              </div>
              <div className="AccountOptionsEle" >
                Your Orders
              </div>
              <div className="AccountOptionsEle" >
               View Cart
              </div>
              <div className="AccountOptionsEle" >
                See History
              </div>
              <div className="AccountOptionsEle" >
                Related Search
              </div>
            </div>
    </div>
  )
}

const RespNavBar = () =>{

    return(
        <div className="NavBarResp-Wrapper">
            <div className="NavBarResp-LeftsideOptionsMenu">
             <Left_Menu />
                </div>
            <div className="NavBarResp-SearchBarWrapper">
            <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search .."
        inputProps={{ 'aria-label': 'search' }}
      />
            </div>
            <div className="NavBarResp-LoginOptions">
            <NavLink to="/Login" className={isActive=> "NavBar-LinkEle" + (isActive ? "" : " ActiveEle-NavBar")} >
        Login
        </NavLink>
   
            </div>
            <div className="NavBarResp-Account">
           <AccountOptions />
            </div>
        </div>
    )
}

export default NavBar;
export { RespNavBar } ;