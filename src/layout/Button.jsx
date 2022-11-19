import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  const { btn, primary } = styles;

  const { action, children, color, type } = props;
  return (
    <button
      className={`${btn} ${color ? styles[color] : primary}`}
      onClick={action}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
