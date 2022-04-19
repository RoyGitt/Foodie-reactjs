import MenuList from "./components/Menu/MenuList";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import Header from "./components/Header/Header";
import AnimaContextProvider from "./store/animation-context";

function App() {
  const [showCart, setShowCart] = useState(false);
  const cartOpenHandler = () => {
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };

  return (
    <AnimaContextProvider>
      <Header onOpenCart={cartOpenHandler} />
      <MenuList />
      {showCart && <Cart onCloseCart={cartCloseHandler} />}
    </AnimaContextProvider>
  );
}

export default App;
