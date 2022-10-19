import React from "react";
import ItemCard from "../molecules/ItemCard";
import { Spin } from "antd";

const CardList = (props) => {
  const { data, loading, onClick } = props;
  return (
    <>
      <div className={loading ? "flex flex-col items-center my-8" : "hidden"}>
        {loading ? <Spin tip="Loading..." size="large" /> : ""}
      </div>
      <div className="flex flex-row gap-3 flex-wrap mx-4-sm justify-center-sm my-4">
        {!loading &&
          data?.map((item, index) => (
            <ItemCard
              key={index}
              pathImage={item.poster_path}
              title={item.title || item.name}
              onClick={() => onClick(item.id, item.media_type)}
            />
          ))}
      </div>
    </>
  );
};

export default CardList;
