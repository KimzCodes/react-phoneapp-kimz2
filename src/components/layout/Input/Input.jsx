import styles from "./input.module.css";

const Input = ({ type = "text", ...rest }) => {
  return <input type={type} {...rest} className={styles.input} />;
};

export default Input;
