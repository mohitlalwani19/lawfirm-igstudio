import React from "react";
import styles from "./HeroSection.module.css";
import heroImage from "../assets/hero.png";

let HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heropart1}>
        <p style={{ fontSize: "66px" }}>
          You don’t have to <br />
          <b>Fight them Alone.</b>
        </p>
        <p style={{ fontSize: "18px", opacity: "0.3", lineHeight: "150%" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.emailInput}>
          <p style={{ color: "black", opacity: "0.7" }}>
            Enter your email address
          </p>
          <button className={styles.btn}>Let's Talk</button>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="heroimg" width={400} />
      </div>
    </div>
  );
};

export default HeroSection;
