import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import React from "react";
import { styled } from "styled-components";
import iphone from "@assets/iphone.jpg";
import reply from "@assets/reply.svg";
import { palette } from "@styles/palette";
import Tag from "../Tag";
import { Link } from "react-router-dom";
import { calculateTime, converter } from "@utils/lib.js";
import sqaure from "@assets/seo_svg.svg";

const Item = ({
  id,
  place = [],
  type = [],
  color = [],
  comment_count = 0,
  created_at,
  title,
  image1,
  content,
  flag,
}) => {
  return (
    <StyledItem>
      <Flex direction="row" justify="start" gap={4}>
        <Link style={{ textDecoration: "none" }} to={`/lost/${id}`}>
          <ItemImg
            data={image1 ? image1 : sqaure}
            type={"image/svg+xml"}
            width={72}
            height={72}
          />
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
                <object
                  style={{ width: "11px", height: "11px" }}
                  data={reply}
                  type="image/svg+xml"
                />
                <Text size={10} color={palette.color_wine} weight={400}>
                  {comment_count}
                </Text>
              </Flex>
            </Flex>
            <Flex direction="row" justify="start" gap={12} height="15px">
              {place[0] ? (
                <Tag>
                  <Text
                    weight={500}
                    lineHeight="100%"
                    color={palette.color_wine}
                  >
                    {`#${converter[place[0]]}`}
                  </Text>
                </Tag>
              ) : (
                ""
              )}

              {type[0] ? (
                <Tag>
                  <Text
                    weight={500}
                    lineHeight="100%"
                    color={palette.color_wine}
                  >
                    {`#${converter[type[0]]}`}
                  </Text>
                </Tag>
              ) : (
                ""
              )}
              {color[0] ? (
                <Tag>
                  <Text
                    weight={500}
                    lineHeight="100%"
                    color={palette.color_wine}
                  >
                    {`#${converter[color[0]]}`}
                  </Text>
                </Tag>
              ) : (
                ""
              )}
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

const ItemImg = styled.object`
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
