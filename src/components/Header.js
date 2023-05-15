import React from "react";

const Header = ({ isLoading }) => {
  return <div>{isLoading ? "Loading...." : "Header"}</div>;
};

export default Header;
