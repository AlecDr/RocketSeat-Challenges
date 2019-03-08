import React from "react";
import styles from "./Modal.module.css";

const modal = props => (
  <div className={styles.Modal}>
    <p>Adicionar novo usuário</p>
    <form>
      <input
        onChange={props.onChangeSearchTextHandler}
        value={props.searchText}
        className={styles.Input}
        type="text"
      />
    </form>

    <div className={styles.Buttons}>
      <div
        onClick={props.onCloseModal}
        className={[styles.Button, styles.Error].join(" ")}
      >
        Cancelar
      </div>
      <div className={[styles.Button, styles.Success].join(" ")}>Adicionar</div>
    </div>
  </div>
);

export default modal;
