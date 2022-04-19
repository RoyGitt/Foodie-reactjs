import styles from "./UserInput.module.css";
import React from "react";
const UserInput = React.forwardRef((props, ref) => {
  return (
    <div className={styles["list-item__control"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default UserInput;
