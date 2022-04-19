import styles from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles["header-button"]} ${props.className}`}
      type={props.type || "button"}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default HeaderButton;
