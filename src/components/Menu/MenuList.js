import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";
import "animate.css";

const menuData = [
  { id: "e1", food: "Sushi", tag: "Finest fish and veggies", price: 22.99 },
  {
    id: "e2",
    food: "Schnitzel",
    tag: "A german specialty!",
    price: 16.5,
  },
  {
    id: "e3",
    food: "Barbecue Burger",
    tag: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "e4",
    food: "Green Bowl",
    tag: "Healthy...and green...  ",
    price: 18.99,
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
