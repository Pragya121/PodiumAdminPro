import React, { useState } from "react";
import  logo from "./logo.png";
import './Sidebar.css';
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data.js";
// import { BrowserRouter, Link } from 'react-router-dom';
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import MainDash from "../MainDash/MainDash";
import AddUser from "../AddUser/AddUser";
// import NotFound from "./NotFound";
import firebase from "firebase/app";
import "firebase/auth";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
const signOut = (e)=>{
  firebase.auth().signOut().then(() => {
  
    console.log("Signed out")
    localStorage.removeItem("token");
    localStorage.removeItem("loginData");
    window.location.reload();
  }).catch((error) => {
    // An error happened.
    alert("error");
    console.log(error);
  });
}
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Podium<span>P</span>ro
        </span>
      </div>

      <div className="menu">
        
       
        {SidebarData.map((item, index) => {
          return (
           
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            ><a href={item.path}>
              <item.icon />
              
              <span > {item.heading}</span>
             </a>
             </div>
            
            
          
          );
        })}
        {/* signoutIcon */}
        <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
         <div className="menuItem" onClick={signOut}>
          <div><UilSignOutAlt  /></div>
          <div>Sign Out</div>
          
        </div>
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;