import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Button from "../UI/Button";
import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/cart-context";

const Cart = (props) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    if (cartCtx.orderData.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [cartCtx.orderData.length]);

  let cartContent = (
    <h3 className={styles["nothing-to-show"]}>No item to show.</h3>
  );

  const addItemHandler = (item) => {
    cartCtx.addItemHandler({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItemHandler(id);
  };
  if (cartCtx.orderData.length > 0) {
    cartContent = cartCtx.orderData.map((foodItem) => {
      return (
        <CartItem
          id={foodItem.id}
          key={foodItem.id}
          food={foodItem.food}
          price={foodItem.price}
          amount={foodItem.amount}
          onAddItem={addItemHandler.bind(null, foodItem)}
          onRemoveItem={removeItemHandler.bind(null, foodItem.id)}
        />
      );
    });
  }
  return (
    <>
      <Modal onClick={props.onCloseCart}>
        <ul className={styles["cart-modal__list"]}>{cartContent}</ul>
        <div className={styles["cart-modal__value"]}>
          <p>Total Amount</p>
          <p>$ {cartCtx.totalCartValue.toFixed(2)}</p>
        </div>
        <div className={styles["cart-buttons"]}>
          <Button
            className={styles["transparent-button"]}
            onClick={props.onCloseCart}
          >
            Close
          </Button>
          <Button disabled={buttonDisabled}>Order</Button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
