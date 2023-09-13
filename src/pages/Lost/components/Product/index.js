import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import React, { useState } from "react";
import { styled } from "styled-components";
import { Text } from "@components/atoms/Text";
import { Space } from "@components/atoms/Space";
import { productData } from "@utils/data";

const Product = ({ onClick }) => {
  const [curFilter, setCurFilter] = useState(undefined);
  const toggleFilter = (val) => {
    if (val === curFilter) {
      setCurFilter(undefined);
    } else {
      setCurFilter(val);
    }
  };

  return (
    <MapContainer>
      <Flex>
        <Flex direction="row" justify="start" gap={6} wrap="wrap">
          {productData.map((el) => (
            <EachItem
              onClick={toggleFilter}
              click={curFilter?.split(" ")[0]}
              {...el}
              key={el.id}
            />
          ))}
        </Flex>
        <Space height={"29px"} />
        <ConfirmBtn
          isSelected={curFilter?.split(" ")[0]}
          onClick={
            curFilter?.split(" ")[0]
              ? () => onClick("product", curFilter)
              : () => {
                  return;
                }
          }
        >
          <Text
            cursor={curFilter?.split(" ")[0] ? "pointer" : "none"}
            size={12}
            color={
              curFilter?.split(" ")[0]
                ? palette.color_white
                : palette.color_white
            }
          >
            확인
          </Text>
        </ConfirmBtn>
      </Flex>
    </MapContainer>
  );
};

const ConfirmBtn = styled.div`
  width: 32%;
  padding: 6px 0px 8px 0px;
  background-color: ${({ isSelected }) =>
    isSelected ? palette.color_wine : palette.color_icon};
  border-radius: 3px;
  cursor: ${({ isSelected }) => (isSelected ? "pointer" : "none")};
  pointer-events: ${({ isSelected }) => (isSelected ? "visible" : "none")};
`;

const EachItem = ({ src, name, onClick, click, unique }) => {
  const isClicked = click === name;
  return (
    <ItemWrapper
      onClick={() => onClick(`${name} ${unique}`)}
      isClicked={isClicked}
    >
      <Flex justify="space-between">
        <div style={{ width: "100%", height: "75px" }}>
          <Flex height="100%">
            <img style={{ cursor: "pointer" }} alt={name} src={src} />
          </Flex>
        </div>
        <Flex>
          <Text
            cursor="pointer"
            size={10}
            weight={400}
            color={isClicked ? palette.color_white : palette.color_mainText}
          >
            {name}
          </Text>
          <Space height={"5px"} />
        </Flex>
      </Flex>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 32%;
  height: 100px;
  background-color: ${({ isClicked }) =>
    isClicked ? palette.color_wine : palette.color_icon};
  border-radius: 3px;
  cursor: pointer;
`;

const MapContainer = styled.div`
  position: absolute;
  top: 18px;
  width: 100%;
  padding: 20px;
  background-color: ${palette.color_beige};
  border-radius: 3px;
`;

export default Product;
