import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return <div className={styles["modal-overlay"]}>{props.children}</div>;
};
const portalLocation = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalLocation
      )}
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalLocation
      )}
    </>
  );
};

export default Modal;
