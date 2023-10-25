import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import giftImg from "../assets/Gift.png";
import styles from "./Card.module.css";
import { CardActionArea, CardActions } from "@mui/material";

export default function CardComp({ image, title, color, type }) {
  switch (type) {
    case "rating": {
      return (
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: color,
            padding: "1rem",
            borderRadius: "14px",
          }}
        >
          <CardActionArea>
            <img src={giftImg} alt="gifticon" />
            <CardContent>
              <Typography
                gutterBottom
                color="white"
                variant="h6"
                component="div"
              >
                <b>{title}</b>
              </Typography>
              <Typography variant="body2" color="gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <button className={styles.btn}>Read More</button>
          </CardActions>
        </Card>
      );
    }
    case "clients": {
      return (
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: color,
            padding: "1rem",
            borderRadius: "14px",
          }}
        >
          <CardActionArea>
            <img src={image} alt="clientPic" />
            <CardContent>
              <Typography
                gutterBottom
                color="white"
                variant="h6"
                component="div"
              >
                <b>{title}</b>
              </Typography>
              <Typography variant="body2" color="gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }
  }
}
