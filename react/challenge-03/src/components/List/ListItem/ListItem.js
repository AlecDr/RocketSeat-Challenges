import React from "react";
import styles from "./ListItem.module.css";

const listItem = props => (
  <div className={styles.ListItem}>
    <div className={styles.UserInfo}>
      <img src={props.user.avatarUrl} />
      <div>
        <p>{props.user.login}</p>
        <span>some@email.com</span>
      </div>
    </div>
    <div className={styles.UserControls}>
      <span className={styles.CloseIcon}>X</span>
      <span className={styles.RightArrowIcon}>></span>
    </div>
  </div>
);

export default listItem;
