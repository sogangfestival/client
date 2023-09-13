import { palette } from "@styles/palette";
import React, { useState } from "react";
import { styled } from "styled-components";

import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import checked from "@assets/checked.svg";
import { colorData } from "@utils/data";

const FilterColor = ({ onClick }) => {
  const [curFilter, setCurFilter] = useState(undefined);

  const changeColor = (val) => {
    console.log(val);
    if (val?.split(" ")[0] === curFilter?.split(" ")[0]) {
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
              click={curFilter?.split(" ")[0]}
              onClick={changeColor}
              {...el}
              key={idx}
            />
          ))}
        </Flex>
        <ConfirmBtn
          isSelected={curFilter?.split(" ")[0]}
          onClick={
            curFilter?.split(" ")[0]
              ? () => onClick("color", curFilter)
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

const EachColor = ({ click, name, src = "", color = "", onClick, id }) => {
  const isClicked = click === name;
  return (
    <EachColorWrapper onClick={() => onClick(`${name} ${id}`)}>
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
