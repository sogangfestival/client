import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import React from "react";
import { styled } from "styled-components";
import iphone from "@assets/iphone.jpg";
import reply from "@assets/reply.svg";
import { palette } from "@styles/palette";
import Tag from "../Tag";
import { Link } from "react-router-dom";
import { calculateTime } from "@utils/lib.js";

const Item = ({
  id,
  place = [],
  type = [],
  color = [],
  replyCount = 0,
  created_at,
  title,
  image1,
  content,
  flag,
}) => {
  const goDetail = () => {};
  return (
    <StyledItem>
      <Flex direction="row" justify="start" gap={4}>
        <Link style={{ textDecoration: "none" }} to={`/lost/${id}`}>
          <ItemImg src={image1 ? image1 : iphone} width={72} height={72} />
        </Link>
        <Flex gap={7} align="start" justify="start">
          <Flex gap={8}>
            <Flex direction="row" justify="start" gap={16}>
              <Flex gap={12} direction="row" width="auto" justify="start">
                <TitleBox>
                  <Link style={{ textDecoration: "none" }} to={`/lost/${id}`}>
                    <Text
                      align="start"
                      cursor="pointer"
                      size={12}
                      weight={700}
                      isCut={true}
                    >
                      {title}
                    </Text>
                  </Link>
                </TitleBox>
                <TimeBox>
                  <Flex>
                    <Text>{calculateTime(created_at)}</Text>
                  </Flex>
                </TimeBox>
              </Flex>
              <Flex direction="row" gap={6} width="auto">
                <img width={11} height={11} src={reply} alt="reply" />
                <Text size={10} color={palette.color_wine} weight={400}>
                  {replyCount}
                </Text>
              </Flex>
            </Flex>
            <Flex direction="row" justify="start" gap={12}>
              <Tag>
                <Text weight={500} lineHeight="100%" color={palette.color_wine}>
                  #{place[0]}
                </Text>
              </Tag>
              <Tag>
                <Text weight={500} lineHeight="100%" color={palette.color_wine}>
                  #{type[0]}
                </Text>
              </Tag>

              <Tag>
                <Text weight={500} lineHeight="100%" color={palette.color_wine}>
                  #{color[0]}
                </Text>
              </Tag>
            </Flex>
          </Flex>
          <Text
            align="start"
            isCut={true}
            cutLine={2}
            weight={400}
            size={10}
            color={palette.color_mainText}
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    </StyledItem>
  );
};

const TimeBox = styled.div`
  width: 43px;
`;

const TitleBox = styled.div`
  width: 156px;
`;

const ItemImg = styled.img`
  object-fit: contain;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 100px;
  padding: 15px 18px 13px 18px;
  border-bottom: solid 1px #c1c1c1;
`;

export default Item;
