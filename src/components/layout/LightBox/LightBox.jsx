import styles from "./lightbox.module.css";
import Container from "../container/Container";

const LightBox = ({ children, closeHandler }) => {
  return (
    <>
      <div className={styles.lightbox} onClick={closeHandler}></div>
      <Container
        style={{
          backgroundColor: "white",
          width: "500px",
          zIndex: 10,
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default LightBox;
