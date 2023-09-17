import React, { useEffect, useState } from "react";
import bird from "@assets/bird.svg";
import styled, { keyframes } from "styled-components";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import { Space } from "@components/atoms/Space";

const textData = [
  "잘못된 경로로 들어왔습니다...",
  "다른 곳으로 가시오...",
  "아무것도 찾을 수 없습니다...",
  "뒤로 가기를 누르시오...",
];

const Spinner = () => {
  const [index, setIndex] = useState(0);

  const changeIndex = () => {
    if (index >= textData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeIndex, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <SpinnerContainer>
      <Flex height="100%">
        <SpinnerWrapper>
          <img src={bird} alt="spinner" />
        </SpinnerWrapper>
        <Space height={"10px"} />
        <Text color={palette.color_mainText} size={20}>
          {textData[index]}
        </Text>
      </Flex>
    </SpinnerContainer>
  );
};

const spin = keyframes`
    0% {
    transform: rotate(0deg); /* 회전 각도 초기값 */
  }
  100% {
    transform: rotate(360deg); /* 360도 회전 */
  }
`;

const SpinnerContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 3;
  top: 0px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SpinnerWrapper = styled.div`
  z-index: 2;
  animation: ${spin} 3s linear infinite;
`;

export default Spinner;
