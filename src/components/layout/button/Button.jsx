import styles from "./button.module.css";

const Button = (props) => {
  const { children, onClick, color } = props;
  const { button, primary } = styles;
  return (
    <button
      onClick={onClick}
      className={`${button} ${color ? styles[color] : primary}`}
    >
      {children}
    </button>
  );
};

export default Button;
