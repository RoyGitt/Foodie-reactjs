import { useContext, useRef } from "react";
import Button from "../UI/Button";
import styles from "./MenuItem.module.css";
import UserInput from "../UI/UserInput";
import { CartContext } from "../../store/cart-context";

const MenuItem = (props) => {
  const enteredAmountRef = useRef();

  //Context
  const cartCtx = useContext(CartContext);

  const foodInfoHanlder = (event) => {
    const enteredAmount = enteredAmountRef.current.value;
    event.preventDefault();
    if (
      enteredAmount < 1 ||
      enteredAmount > 5 ||
      enteredAmount.trim().length === 0
    ) {
      return;
    }
    let orderInfo = {};

    orderInfo = {
      id: props.id,
      food: props.food,
      price: props.price,
      amount: +enteredAmount,
    };

    cartCtx.addItemHandler(orderInfo);
  };
  return (
    <li className={styles["list-item"]}>
      <div className={styles["list-item__description"]}>
        {" "}
        <h2 className={styles["list-item__food-name"]}>{props.food}</h2>
        <h3 className={styles["list-item__tag"]}>{props.tag}</h3>
        <h3 className={styles["list-item__price"]}>$ {props.price}</h3>
      </div>
      <form onSubmit={foodInfoHanlder}>
        <UserInput
          label="Amount"
          ref={enteredAmountRef}
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <div>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </li>
  );
};

export default MenuItem;
