import React from "react";
import ItemCard from "../molecules/ItemCard";

const CardList = (data) => {
  return (
    <div className="flex flex-row gap-3 flex-wrap mx-4-sm justify-center-sm my-4">
      {data?.data?.map((item, index) => (
        <ItemCard
          key={index}
          pathImage={item.poster_path}
          title={item.title || item.name}
          onClick={() => console.log("yuhu", item.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
