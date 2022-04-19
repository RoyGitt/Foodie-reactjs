import styles from "./Header.module.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import HeaderButton from "./HeaderButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import { CartContext } from "../../store/cart-context";
const Header = (props) => {
  const [itemsInCart, setItemsInCart] = useState(0);

  //CONTEXT
  const cartCtx = useContext(CartContext);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (cartCtx.orderData.length > 0) {
      const amount = cartCtx.orderData.map((item) => {
        return item.amount;
      });
      const totalOrderAmount = amount.reduce((amount, currentAmount) => {
        return amount + currentAmount;
      });

      setItemsInCart(totalOrderAmount);
      setAnimation(true);

      const timer = setTimeout(() => {
        setAnimation(false);
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [cartCtx.orderData]);

  return (
    <header className={styles.header}>
      <div>
        <h1 className="animate__animated animate__lightSpeedInLeft">
          <span>
            <ElectricBoltOutlinedIcon className={styles["electric-icon"]} />
          </span>
          Fast Food
        </h1>
        <HeaderButton
          className={animation && styles.pulse}
          onClick={props.onOpenCart}
        >
          <span>
            <ShoppingCartOutlinedIcon
              className={styles["shopping-cart-icon"]}
            />
          </span>
          Your Cart<span className={styles.counter}>{itemsInCart}</span>
        </HeaderButton>
      </div>
    </header>
  );
};

export default Header;
