import React from "react";
import styles from "./ListItem.module.css";

const listItem = props => (
  <div className={styles.ListItem}>
    <div className={styles.UserInfo}>
      <img src={props.user.avatarUrl} />
      <div>
        <p>{props.user.login}</p>
      </div>
    </div>
    <div className={styles.UserControls}>
      <span
        onClick={() => props.onRemoveUser(props.user)}
        className={styles.CloseIcon}
      >
        X
      </span>
      <span
        onClick={() => props.onFocusUserHandler(props.user)}
        className={styles.RightArrowIcon}
      >
        >
      </span>
    </div>
  </div>
);

export default listItem;
