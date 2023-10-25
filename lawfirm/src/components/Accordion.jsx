import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Accordion.module.css";

export default function BasicAccordion() {
  return (
    <div className={styles.wrapper}>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We can first have a discussion. Contact me please!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Typography>What should I do right after car accident?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can analyse and first come to decision of who's fault it is.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Typography>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Contact me please!</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
