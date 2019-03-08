import React from "react";
import styles from "./List.module.css";

import ListItem from "./ListItem/ListItem";

const list = props => {
  return (
    <div className={styles.ListContainer}>
      <ul className={styles.List}>
        {props.users ? (
          props.users.length ? (
            props.users.map(user => (
              <ListItem
                onRemoveUser={props.onRemoveUser}
                onFocusUserHandler={props.onFocusUserHandler}
                key={user.login}
                user={user}
              />
            ))
          ) : (
            <p>Start adding users!</p>
          )
        ) : (
          <p>Start adding users!</p>
        )}
      </ul>
    </div>
  );
};

export default list;
