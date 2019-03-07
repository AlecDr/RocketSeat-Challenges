import React from "react";
import styles from "./ListItem.css";

const listItem = props => (
  <div className={styles.ListItem}>
    <div className={styles.UserInfo}>
      <img src="https://avatars3.githubusercontent.com/u/2254731?s=88&v=4" />
      <div>
        <p>Github User</p>
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
