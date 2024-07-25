import React, { PropsWithChildren } from "react";

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({ children }: PropsWithChildren) => {
  const [shopCar, setShopCar] = React.useState([
    { id: "", img: "", title: "", price: 0 },
  ]);
  const [favorites, setFavorites] = React.useState([
    { id: "", img: "", title: "", price: 0 },
  ]);

  return (
    <GlobalContext.Provider
      value={[
        { shopCar, setShopCar },
        { favorites, setFavorites },
      ]}
    >
      {children}
    </GlobalContext.Provider>
  );
};
