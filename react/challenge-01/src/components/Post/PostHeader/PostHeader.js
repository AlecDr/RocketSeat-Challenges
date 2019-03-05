import React from "react";
import styles from "./PostHeader.css";

const postHeader = props => {
  return (
    <div>
      <div className={styles.PostHeader}>
        <img src={props.author.picture} />
        <div className={styles.AuthorData}>
          <p>{props.author.name}</p>
          <span>Há 20 min</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default postHeader;
