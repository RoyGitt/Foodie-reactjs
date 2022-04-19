//////////////////////////////
// HEADER BUTTON ANIMATION STATE
//////////////////////////////

import React, { useState } from "react";
export const AnimaContext = React.createContext({
  showCart: undefined,
  animaAddHandler: () => {},
  animaRemoveHandler: () => {},
});

const AnimaContextProvider = (props) => {
  const [animation, setAnimation] = useState(false);
  const animaAddHandler = () => {
    setAnimation(true);
  };
  const animaRemoveHandler = () => {
    setAnimation(false);
  };
  return (
    <AnimaContext.Provider
      value={{
        animation: animation,
        animaAddHandler: animaAddHandler,
        animaRemoveHandler: animaRemoveHandler,
      }}
    >
      {props.children}
    </AnimaContext.Provider>
  );
};

export default AnimaContextProvider;
