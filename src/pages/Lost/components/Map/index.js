import { palette } from "@styles/palette";
import React, { useState } from "react";
import { css, keyframes, styled } from "styled-components";
import map from "@assets/map.png";
import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { mapData } from "@utils/data";
import { Text } from "@components/atoms/Text";
import indicator from "@assets/indicator.svg";

const Map = ({ click, onClick }) => {
  const [mapName, setMapName] = useState(undefined);

  return (
    <MapContainer>
      <Flex>
        <MapWrapper>
          <MapImg src={map} alt="map" />
          {mapData.map((el) => (
            <IndicatorContainer
              isClicked={mapName?.split(" ")[0] === el.name}
              x={el.coord.x}
              y={el.coord.y}
              key={el.name}
            >
              <img
                src={indicator}
                alt="indicator"
                width={"16px"}
                height={"23px"}
              />
            </IndicatorContainer>
          ))}
        </MapWrapper>
        <Space height={"25px"} />
        <Flex direction="row" justify="start" gap={6} wrap="wrap">
          {mapData.map((el, id, idx) => (
            <MapItem
              isClicked={mapName?.split(" ")[0] === el.name}
              key={id}
              onClick={
                el.name === mapName?.split(" ")[0]
                  ? () => setMapName(undefined)
                  : () => setMapName(`${el.name} ${el.id}`)
              }
            >
              <Text
                color={
                  mapName?.split(" ")[0] === el.name
                    ? "white"
                    : palette.color_mainText
                }
                cursor="pointer"
              >
                {el.name}
              </Text>
            </MapItem>
          ))}
        </Flex>
        <Space height={"21px"} />
        <MapItem
          onClick={
            mapName?.split(" ")[0]
              ? () => onClick("location", mapName)
              : () => {}
          }
          isClicked={mapName?.split(" ")[0]}
        >
          <Text
            color={mapName?.split(" ")[0] ? "white" : palette.color_mainText}
            cursor="pointer"
          >
            확인
          </Text>
        </MapItem>
      </Flex>
    </MapContainer>
  );
};

const fadeUp = keyframes`
  0% {
    transform: translateY(10px);
    opacity : 0%; 
  }
  100% {
    transform: translateY(0px); 
    opacity : 100%; 
  }
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  opacity: 0%;
  ${({ isClicked }) =>
    isClicked
      ? css`
          pointer-events: visible;
          animation: ${fadeUp} 0.3s linear forwards;
        `
      : css`
          pointer-events: none;
        `}
`;

const MapItem = styled.div`
  background-color: ${({ isClicked }) =>
    isClicked ? palette.color_wine : palette.color_line};
  width: 100px;
  height: 20px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

const MapContainer = styled.div`
  position: absolute;
  top: 12px;
  width: 100%;
  padding: 20px;
  background-color: ${palette.color_beige};
`;

export default Map;
