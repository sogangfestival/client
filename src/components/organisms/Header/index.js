import React from "react";
import { styled } from "styled-components";
import logo from "@assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <StyledHeader>
        <img style={{ cursor: "pointer" }} alt="logo" src={logo} />
      </StyledHeader>
    </Link>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 19px 105px 0px 105px;
`;

export default Header;
