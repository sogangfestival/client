import { palette } from "@styles/palette";
import React, { useState } from "react";
import { styled } from "styled-components";
import pattern from "@assets/pattern.svg";
import etc from "@assets/etc.svg";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import checked from "@assets/checked.svg";

const colorData = [
  {
    name: "레드",
    color: "#EC1E31",
  },
  {
    name: "오렌지",
    color: "#F26429",
  },
  {
    name: "옐로우",
    color: "#FDB716",
  },
  {
    name: "그린",
    color: "#1CAF4D",
  },
  {
    name: "블루",
    color: "#1D6ECD",
  },
  {
    name: "네이비",
    color: "#1D4F89",
  },
  {
    name: "퍼플",
    color: "#865CBB",
  },
  {
    name: "핑크",
    color: "#F16EA7",
  },
  {
    name: "화이트",
    color: "#ffffff",
  },
  {
    name: "블랙",
    color: "#000000",
  },
  {
    name: "골드",
    color:
      "linear-gradient(0deg, rgba(254, 206, 97, 0.20) 0%, rgba(254, 206, 97, 0.20) 100%), conic-gradient(from 180deg at 48.5% 50%, #E3A455 26.24999910593033deg, #F6DBA6 88.12500178813934deg, #FFEBC3 156.58468008041382deg, #F0BE79 191.74442768096924deg, #8F653B 213.59200716018677deg, #673D22 225.95467329025269deg, #BA7F3B 255.19062280654907deg, #EEBC70 278.6032176017761deg, #976349 331.875deg)",
  },
  {
    name: "실버",
    color:
      "conic-gradient(from 180deg at 48.5% 50%, #FBFBFD 26.24999910593033deg, #C8D4DA 88.12500178813934deg, #FFF 156.58468008041382deg, #AEC0CE 191.74442768096924deg, #E3E9EE 237.1290135383606deg, #FAFBFC 255.19062280654907deg, #D6DFE6 310.1085305213928deg, #B8C9D3 331.875deg)",
  },
  {
    name: "브라운",
    color: "#000000",
  },
  {
    name: "베이지",
    color: "#000000",
  },
  {
    name: "패턴",
    src: pattern,
  },
  {
    name: "기타",
    src: etc,
  },
];

const FilterColor = ({ onClick }) => {
  const [curFilter, setCurFilter] = useState(undefined);

  const changeColor = (val) => {
    if (val === curFilter) {
      setCurFilter(undefined);
    } else {
      setCurFilter(val);
    }
  };
  return (
    <FilterColorWrapper>
      <Flex gap={21}>
        <Flex direction="row" gap={40} justify="start" wrap="wrap">
          {colorData.map((el, idx) => (
            <EachColor
              click={curFilter}
              onClick={changeColor}
              {...el}
              key={idx}
            />
          ))}
        </Flex>
        <ConfirmBtn
          isSelected={curFilter}
          onClick={
            curFilter
              ? () => onClick("color", curFilter)
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
    </FilterColorWrapper>
  );
};

const ConfirmBtn = styled.div`
  width: 32%;
  padding: 6px 0px 8px 0px;
  background-color: ${({ isSelected }) =>
    isSelected ? palette.color_wine : palette.color_icon};
  border-radius: 3px;
  cursor : ${({ isSelected }) => (isSelected ? "pointer" : "none")}
  pointer-events: ${({ isSelected }) => (isSelected ? "visible" : "none")};
`;

const EachColor = ({ click, name, src = "", color = "", onClick }) => {
  const isClicked = click === name;
  return (
    <EachColorWrapper onClick={() => onClick(name)}>
      <Flex gap={5} width="auto">
        {src ? (
          <img
            style={{
              cursor: "pointer",
              border: isClicked
                ? `4px solid ${palette.color_wine}`
                : `4px solid ${palette.color_beige}`,
              borderRadius: "10px",
              backgroundColor: name === "기타" ? palette.color_icon : "none",
            }}
            width={"47px"}
            height={"47px"}
            src={src}
            alt="color"
          />
        ) : (
          <div
            style={{
              borderRadius: "10px",
              cursor: "pointer",
              width: "47px",
              height: "47px",
              background: color,
              border: isClicked
                ? `4px solid ${palette.color_wine}`
                : `4px solid ${palette.color_beige}`,
            }}
          ></div>
        )}
        <Text color={palette.color_mainText} size={10} weight={400}>
          {name}
        </Text>
      </Flex>
      {isClicked ? (
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: palette.color_wine,
            position: "absolute",
            borderRadius: "50%",
            top: "8px",
            left: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={checked} alt="check" />
        </div>
      ) : (
        ""
      )}
    </EachColorWrapper>
  );
};

const EachColorWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

const FilterColorWrapper = styled.div`
  position: absolute;
  top: 18px;
  width: 100%;
  padding: 20px;
  background-color: ${palette.color_beige};
  border-radius: 3px;
`;

export default FilterColor;
