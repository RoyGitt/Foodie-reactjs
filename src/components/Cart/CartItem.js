import styles from "./CartItem.module.css";
import CartButton from "./CartButton";

const CartItem = (props) => {
  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item__info"]}>
        <h2>{props.food}</h2>
        <div>
          <p>$ {props.price}</p>
          <p>x {props.amount}</p>
        </div>
      </div>
      <div className={styles["cart-item__controls"]}>
        <CartButton
          style={{ marginRight: "1rem" }}
          onClick={props.onRemoveItem}
        >
          -
        </CartButton>
        <CartButton onClick={props.onAddItem}>+</CartButton>
      </div>
    </li>
  );
};

export default CartItem;
