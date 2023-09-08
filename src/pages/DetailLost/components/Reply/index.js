import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { calculateTime } from "@utils/lib";
import React from "react";
import { styled } from "styled-components";
import replSign from "@assets/replSign.svg";
import { palette } from "@styles/palette";

const Reply = ({ name, postTime, content, reReply }) => {
  return (
    <ReplyContainer>
      <Flex gap={4} align="start">
        <Flex direction="row" justify="start" gap={10}>
          <Text
            size={12}
            color={
              name === "작성자" ? palette.color_wine : palette.color_mainText
            }
          >
            {name}
          </Text>
          <Text size={8} weight={300}>
            {calculateTime(postTime)}
          </Text>
        </Flex>
        <Text size={11} weight={400}>
          {content}
        </Text>
        <ReReplyContainer>
          <Flex justify="start">
            {reReply.map((el) => (
              <ReReply key={el.id} {...el} />
            ))}
          </Flex>
        </ReReplyContainer>
      </Flex>
    </ReplyContainer>
  );
};

const ReReplyContainer = styled.div`
  padding-left: 43px;
`;

const ReReply = ({ name, postTime, content }) => {
  return (
    <ReReplContainer>
      <Flex direction="row" gap={7} justify="start">
        <img src={replSign} alt="repl" width={"13px"} height={"13px"} />
        <Flex gap={4} align="start">
          <Flex direction="row" justify="start" gap={10}>
            <Text
              size={12}
              color={
                name === "작성자" ? palette.color_wine : palette.color_mainText
              }
            >
              {name}
            </Text>
            <Text size={8} weight={300}>
              {calculateTime(postTime)}
            </Text>
          </Flex>
          <Text size={11} weight={400}>
            {content}
          </Text>
        </Flex>
      </Flex>
    </ReReplContainer>
  );
};

const ReReplContainer = styled.div`
  padding: 10px 0px;
`;

const ReplyContainer = styled.div``;

export default Reply;
