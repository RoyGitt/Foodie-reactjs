import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";
import "animate.css";

const menuData = [
  {
    id: "e1",
    food: "Double down Burger",
    tag: "More meat less Bun",
    price: 350,
  },
  {
    id: "e2",
    food: "Fried Chicken",
    tag: "Juicy chicken fried to perfection",
    price: 150,
  },
  {
    id: "e3",
    food: "Chicken Salad",
    tag: "Fresh veggies with chicken",
    price: 200,
  },
  {
    id: "e4",
    food: "Popcorn Chicken",
    tag: "Juicy bite size chicken with a crispy delight",
    price: 250,
  },
];

const MenuList = (props) => {
  return (
    <ul className={`${styles.list} ${"animate__animated animate__fadeInUp"}`}>
      {menuData.map((item) => {
        return (
          <MenuItem
            id={item.id}
            key={item.id}
            food={item.food}
            tag={item.tag}
            price={item.price}
            onAddItem={props.onAddItem}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
