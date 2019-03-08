import React from "react";
import styles from "./Modal.module.css";

const modal = props => (
  <div className={styles.Modal}>
    <p>Add a new user</p>
    <form onSubmit={props.onSubmit}>
      <input
        onChange={props.onChangeSearchTextHandler}
        value={props.searchText}
        className={styles.Input}
        type="text"
      />
      <div className={styles.Buttons}>
        <button
          type="button"
          onClick={props.onCloseModal}
          className={[styles.Button, styles.Error].join(" ")}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!props.searchText}
          className={[styles.Button, styles.Success].join(" ")}
        >
          Add
        </button>
      </div>
    </form>
  </div>
);

export default modal;
