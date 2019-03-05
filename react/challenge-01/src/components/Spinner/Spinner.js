import React from "react";
import image from "../../assets/images/react-logo.png";
import styles from "./Spinner.css";

const spinner = props => (
  <div className={styles.Spinner}>
    <img src={image} />
    <p>{props.text}</p>
  </div>
);

export default spinner;
