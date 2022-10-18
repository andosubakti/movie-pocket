import React from "react";
import { useRouter } from "next/router";
import SearchComponent from "../atoms/Search";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="font-bold text-3xl"> Movie Pocket </h1>
      <h2 className="italic"> Movie Library in your pocket!</h2>
      <SearchComponent
        placeholder="Search Movies and Tv Shows"
        enterButton="Search!"
        onSearch={(value) => {
          router.push(`/search/${value}`);
        }}
      />
    </>
  );
};

export default Header;
