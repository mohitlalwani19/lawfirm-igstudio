import React from "react";
import styles from "./Intro.module.css";
import Divider from "@mui/material/Divider";

let Intro = () => {
  return (
    <div className={styles.intro}>
      <p style={{ fontSize: "54px", fontWeight: "600" }}>
        Let’s Introduce Ourself
      </p>
      <Divider orientation="vertical" flexItem sx={{ borderColor: "gray" }} />
      <div className={styles.intropart1}>
        <p style={{ fontSize: "32px", fontWeight: "600" }}>Criminal Lawyer</p>
        <p style={{ fontSize: "18px", opacity: "0.3", lineHeight: "150%" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Intro;
