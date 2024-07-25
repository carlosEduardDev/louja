import React from "react";

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({ children }: React.PropsWithChildren) => {
  const [shopCar, setShopCar] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

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
