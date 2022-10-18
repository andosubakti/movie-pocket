import Image from "next/image";
import React from "react";
import noImage from "../../public/No-Image.png";

const ItemCard = (props) => {
  const { pathImage, onClick, title } = props;
  return (
    <div className="bg-transparent relative" onClick={() => onClick()}>
      <a href="#">
        <Image
          className="rounded-lg"
          src={
            pathImage ? "https://image.tmdb.org/t/p/w200/" + pathImage : noImage
          }
          width="180"
          height="270"
        />
      </a>
      <div className="p-2 rounded-b-lg w-full absolute bottom-0 bg-gradient-to-b from-transparent to-black">
        <a href="#">
          <h5 className=" text-sm text-gray-100 text-center">{title}</h5>
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
