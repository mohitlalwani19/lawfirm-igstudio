import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.svg";

let Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" height="24px" />
      <div className={styles.menu}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className={styles.btn}>Contact Now</div>
    </nav>
  );
};

export default Navbar;
