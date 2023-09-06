import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { calculateTime } from "@utils/lib";
import React from "react";
import { styled } from "styled-components";

const Reply = ({ name, postTime, content }) => {
  return (
    <ReplyContainer>
      <Flex gap={4} align="start">
        <Flex direction="row" justify="start" gap={10}>
          <Text size={12}>{name}</Text>
          <Text size={8} weight={300}>
            {calculateTime(postTime)}
          </Text>
        </Flex>
        <Text size={11} weight={400}>
          {content}
        </Text>
      </Flex>
    </ReplyContainer>
  );
};

const ReplyContainer = styled.div``;

export default Reply;
