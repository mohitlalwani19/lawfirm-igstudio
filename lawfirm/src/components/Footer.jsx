import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";

let Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <img src={logo} alt="logo" height="24px" />
        <div className={styles.menu}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className={styles.menu}>
          <img src="" alt="insta" />
          <img src="" alt="fb" />
          <img src="" alt="tweet" />
          <img src="" alt="pint" />
        </div>
      </div>
      <div className={styles.credits}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
