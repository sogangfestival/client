import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import Header from "@components/organisms/Header";
import Spinner from "@components/organisms/Spinner";
import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Header />
      <Space height={"100px"} />
      <Spinner />
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
`;

export default NotFound;
