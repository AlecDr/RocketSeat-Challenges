import React from "react";
import styles from "./List.css";

import ListItem from "./ListItem/ListItem";

const list = props => {
  return (
    <div className={styles.ListContainer}>
      <ul className={styles.List}>
        <ListItem />
      </ul>
    </div>
  );
};

export default list;
