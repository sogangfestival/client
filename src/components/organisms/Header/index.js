import React from "react";
import { styled } from "styled-components";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <StyledHeader>
        <img
          style={{ cursor: "pointer" }}
          src={logo}
          width={"150px"}
          height={"48px"}
        />
      </StyledHeader>
    </Link>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 19px 105px 0px 105px;
`;

export default Header;
