import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import React, { useState } from "react";
import { styled } from "styled-components";
import card from "@assets/card.svg";
import phone from "@assets/phone.svg";
import cosmetic from "@assets/cosmetic.svg";
import wallet from "@assets/wallet.svg";
import etc from "@assets/etc.svg";
import cloth from "@assets/cloth.svg";
import { Text } from "@components/atoms/Text";
import { Space } from "@components/atoms/Space";

const data = [
  {
    id: 1,
    name: "전자기기",
    src: phone,
  },
  {
    id: 2,
    name: "지갑",
    src: wallet,
  },
  {
    id: 3,
    name: "화장품",
    src: cosmetic,
  },
  {
    id: 4,
    name: "의류/액세서리",
    src: cloth,
  },
  {
    id: 5,
    name: "카드/신분증",
    src: card,
  },
  {
    id: 6,
    name: "기타",
    src: etc,
  },
];

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
          {data.map((el) => (
            <EachItem
              onClick={toggleFilter}
              click={curFilter}
              {...el}
              key={el.id}
            />
          ))}
        </Flex>
        <Space height={"29px"} />
        <ConfirmBtn
          isSelected={curFilter}
          onClick={
            curFilter
              ? () => onClick("product", curFilter)
              : () => {
                  return;
                }
          }
        >
          <Text
            cursor={curFilter ? "pointer" : "none"}
            size={12}
            color={curFilter ? palette.color_white : palette.color_white}
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

const EachItem = ({ src, name, onClick, click }) => {
  const isClicked = click === name;
  return (
    <ItemWrapper onClick={() => onClick(name)} isClicked={isClicked}>
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
