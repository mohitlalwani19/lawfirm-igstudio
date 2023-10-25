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
        <form className={styles.wrapper}>
          <input
            className={styles.inputField}
            placeholder="Enter your email address"
          />
          <button className={styles.btn}>Let's Talk</button>
        </form>
      </div>
      <div>
        <img src={heroImage} alt="heroimg" width={400} />
      </div>
    </div>
  );
};

export default HeroSection;
