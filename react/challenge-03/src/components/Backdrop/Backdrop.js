import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = props => (
  <div onClick={props.onCloseModal} className={styles.Backdrop} />
);

export default backdrop;
