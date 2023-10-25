import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./Reviews.module.css";
import Card from "./Card";
import pic1 from "../assets/pic1.svg";
import pic2 from "../assets/pic2.svg";
import pic3 from "../assets/pic3.svg";

let Reviews = () => {
  return (
    <div>
      <div className={styles.flex2}>
        <h1>
          What says our
          <br />
          happy Clients
        </h1>
        <div>
          <button className={styles.btn}>
            <ArrowBackIcon fontSize="large" />
          </button>
          <button className={styles.btn} style={{ backgroundColor: "#E3B748" }}>
            <ArrowForwardIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div className={styles.flex}>
        <Card image={pic1} title="Jane Cooper" color="black" type="clients" />
        <Card image={pic2} title="Devon Lane" color="#2E2E2E" type="clients" />
        <Card image={pic3} title="Robert Fox" color="black" type="clients" />
      </div>
    </div>
  );
};

export default Reviews;
