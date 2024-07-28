import React from "react";

export type ContextProps = [
  {
    shopCar: { id: string; img: string; title: string; price: number }[];
    setShopCar: React.Dispatch<
      React.SetStateAction<
        {
          id: string;
          img: string;
          title: string;
          price: number;
        }[]
      >
    >;
  },
  {
    favorites: { id: string; img: string; title: string; price: number }[];
    setFavorites: React.Dispatch<
      React.SetStateAction<
        {
          id: string;
          img: string;
          title: string;
          price: number;
        }[]
      >
    >;
  }
];
