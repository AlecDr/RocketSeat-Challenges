import React from "react";
import styles from "./List.module.css";

import ListItem from "./ListItem/ListItem";

const list = props => {
  return (
    <div className={styles.ListContainer}>
      <ul className={styles.List}>
        {props.users ? null : <p>Start adding users!</p>}
      </ul>
    </div>
  );
};

export default list;
