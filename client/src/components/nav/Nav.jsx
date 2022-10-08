import React from "react";
import styles from "./Nav.module.css"
import logo from "../../img/world-logo.svg"
import SearchNav from "../searchnav/SearchNav"


const Nav = () =>{

  function detectPathname(){
    if(window.location.pathname === "/home") return <SearchNav/>;
    else return "";
  }

  return(
    <div className={styles.nav}>
      <div className={styles.logo}>
        <h2>Gotravel</h2>
        <img src={logo} alt="Logo" />
      </div>
      { detectPathname() }
        <ul className={styles.nav_menu}>
          <li><a href="/home">Home</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/about">About</a></li>
        </ul>
    </div>
  )
}

export default Nav