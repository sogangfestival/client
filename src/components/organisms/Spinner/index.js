import React, { useEffect, useState } from "react";
import bird from "@assets/bird.svg";
import styled, { keyframes } from "styled-components";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import { Space } from "@components/atoms/Space";

const textData = [
  "로딩 중...",
  "알로스가 먹이를 찾는 중...",
  "서강대 축제 텐션 높이는 중...",
  "푸드 트럭 음식 준비 중...",
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
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SpinnerWrapper = styled.div`
  z-index: 2;
  animation: ${spin} 3s linear infinite;
`;

export default Spinner;
