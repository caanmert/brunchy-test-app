import React from "react";
import { items } from "../../data/items";
import { Card } from "../card/card";

export const CardList = () => {
  return (
    <>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
};
