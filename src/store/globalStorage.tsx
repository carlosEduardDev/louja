import React from "react";

export const GlobalContext = React.createContext({});

export const GlobalStorage = ({ children }: React.PropsWithChildren) => {
  const [shopCar, setShopCar] = React.useState(
    JSON.parse(localStorage.getItem("products") as string) || []
  );
  const [favorites, setFavorites] = React.useState(
    JSON.parse(localStorage.getItem("favorites") as string) || []
  );

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
