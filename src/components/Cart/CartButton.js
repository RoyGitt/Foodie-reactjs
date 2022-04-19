import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles["cart-button"]} ${props.className}`}
      type={props.type || "button"}
      style={props.style}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CartButton;
