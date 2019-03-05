import React from "react";
import styles from "./Post.css";

// custom components
import PostHeader from "./PostHeader/PostHeader";

const header = props => {
  return (
    <div className={styles.Post}>
      <PostHeader author={props.post.author} />
      <p>{props.post.content}</p>
    </div>
  );
};

export default header;
