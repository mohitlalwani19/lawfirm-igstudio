import React from "react";
import styles from "./Newsletter.module.css";

let Newsletter = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Subscribe Our Newsletter</h1>
      <div className={styles.inputs}>
        <input type="text" placeholder="Name" className={styles.input1} />
        <input
          type="text"
          placeholder="Enter your Email"
          className={styles.input2}
        />
        <button className={styles.btn}>Send</button>
      </div>
    </div>
  );
};

export default Newsletter;
