import React from "react";
import styles from "./Images.module.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import tm1 from "../assets/tm1.svg";
import tm2 from "../assets/tm2.svg";
import tm3 from "../assets/tm3.svg";
import tm4 from "../assets/tm4.svg";
import tm5 from "../assets/tm5.svg";
import tm6 from "../assets/tm6.svg";

let Images = ({ type }) => {
  switch (type) {
    case "social": {
      return (
        <div className={styles.social}>
          <a href="https://www.instagram.com/">
            <img src={icon1} alt="insta" style={{ width: "16px" }} />
          </a>
          <a href="https://www.facebook.com/">
            <img src={icon2} alt="fb" style={{ width: "16px" }} />
          </a>
          <a href="https://twitter.com/">
            <img src={icon3} alt="twitter" style={{ width: "16px" }} />
          </a>
          <a href="https://in.pinterest.com/">
            <img src={icon4} alt="pinterest" style={{ width: "16px" }} />
          </a>
        </div>
      );
    }
    case "gallery": {
      return (
        <div className={styles.gallery}>
          <img
            src={img1}
            alt="img1"
            style={{ width: "752px", height: "342px" }}
          />

          <img
            src={img2}
            alt="img2"
            style={{ width: "358px", height: "342px" }}
          />
          <img
            src={img3}
            alt="img3"
            style={{ width: "358px", height: "342px" }}
          />
          <img
            src={img4}
            alt="img4"
            style={{ width: "752px", height: "342px" }}
          />
          <img
            src={img5}
            alt="img5"
            style={{ width: "752px", height: "342px" }}
          />
          <img
            src={img6}
            alt="img6"
            style={{ width: "358px", height: "342px" }}
          />
        </div>
      );
    }
    case "team": {
      return (
        <div className={styles.team}>
          <div className={styles.member}>
            <img
              src={tm1}
              alt="tm1"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Danial Def</h3>
              <p style={{ opacity: "0.3" }}>301 Cases</p>
            </div>
          </div>
          <div className={styles.member}>
            <img
              src={tm2}
              alt="tm2"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Sanfole</h3>
              <p style={{ opacity: "0.3" }}>850 Cases</p>
            </div>
          </div>
          <div className={styles.member}>
            <img
              src={tm3}
              alt="tm3"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Cesforila</h3>
              <p style={{ opacity: "0.3" }}>470 Cases</p>
            </div>
          </div>
          <div className={styles.member}>
            <img
              src={tm4}
              alt="tm4"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Colleen</h3>
              <p style={{ opacity: "0.3" }}>180 Cases</p>
            </div>
          </div>
          <div className={styles.member}>
            <img
              src={tm5}
              alt="tm5"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Haldone</h3>
              <p style={{ opacity: "0.3" }}>212 Cases</p>
            </div>
          </div>
          <div className={styles.member}>
            <img
              src={tm6}
              alt="tm6"
              style={{ height: "68px", width: "68px" }}
            />
            <div>
              <h3>Nik Jeo</h3>
              <p style={{ opacity: "0.3" }}>350 Cases</p>
            </div>
          </div>
        </div>
      );
    }
  }

  return;
  <div></div>;
};

export default Images;
