import Header from "@components/organisms/Header";
import React from "react";
import { styled } from "styled-components";

const AppContainer = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
`;

export default AppContainer;
