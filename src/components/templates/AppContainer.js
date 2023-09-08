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
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export default AppContainer;
