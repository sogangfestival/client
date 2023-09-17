import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import Header from "@components/organisms/Header";
import Spinner from "@components/organisms/Spinner";
import React from "react";
import styled from "styled-components";

const PAGE404 = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Header />
      <Space height={"100px"} />
      <Spinner />
    </div>
  );
};

export default PAGE404;
