import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { calculateTime } from "@utils/lib";
import React, { useState } from "react";
import { styled } from "styled-components";
import replSign from "@assets/replSign.svg";
import { palette } from "@styles/palette";
import reply from "@assets/reply.svg";

const Reply = ({ name, postTime, content, reReply }) => {
  const [isOnComment, setIsOnComment] = useState(false);
  const reReplyOnComment = () => {
    const isTrue = window.confirm("이 댓글에 대댓글을 작성하시겠습니까?");
    if (isTrue) {
      setIsOnComment(true);
    }
  };
  return (
    <ReplyContainer>
      <Flex gap={4} align="start">
        <ReplyWrapper isClicked={isOnComment}>
          <Flex gap={4} align="start">
            <Flex direction="row" justify="start" gap={20}>
              <Flex width="auto" direction="row" justify="start" gap={10}>
                <Text
                  size={12}
                  color={
                    name === "작성자"
                      ? palette.color_wine
                      : palette.color_mainText
                  }
                >
                  {name}
                </Text>
                <Text size={8} weight={300}>
                  {calculateTime(postTime)}
                </Text>
              </Flex>

              <img
                onClick={() => reReplyOnComment()}
                style={{ cursor: "pointer" }}
                src={reply}
                alt="reply"
                width={"11px"}
                height={"10px"}
              />
            </Flex>
            <Text size={11} weight={400}>
              {content}
            </Text>
          </Flex>
        </ReplyWrapper>
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

const ReplyWrapper = styled.div`
  width: 100%;
  background-color: ${({ isClicked }) =>
    isClicked ? "rgba(125, 1, 38, 0.2)" : "none`"};
`;

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
