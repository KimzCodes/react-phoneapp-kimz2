import styles from "./lightbox.module.css";
import Container from "../container/Container";

const LightBox = ({ children, close }) => {
  return (
    <>
      <div className={styles.lightbox} onClick={close}></div>
      <Container
        style={{
          backgroundColor: "white",
          width: "500px",
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default LightBox;
