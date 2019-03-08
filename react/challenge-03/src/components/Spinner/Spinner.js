import React from "react";
import styles from "./Spinner.module.css";
import reactLogo from "../../assets/images/react-logo.png";

const spinner = props => (
  <div className={styles.Spinner}>
    <img src={reactLogo} />
    <p>{props.text}</p>
  </div>
);

export default spinner;
