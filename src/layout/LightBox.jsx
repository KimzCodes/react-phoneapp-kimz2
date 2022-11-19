import React from "react";
import styles from "./lightbox.module.css";

const LightBox = ({ children }) => {
  const { lightBox } = styles;
  return <div className={lightBox}>{children}</div>;
};

export default LightBox;
