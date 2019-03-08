import React, { Fragment } from "react";
import styles from "./Modal.module.css";

import Spinner from "../Spinner/Spinner";

const modal = props => (
  <div className={styles.Modal}>
    {props.loading ? (
      <Spinner text="Loading" />
    ) : (
      <Fragment>
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
      </Fragment>
    )}
  </div>
);

export default modal;
