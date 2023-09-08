import { palette } from "@styles/palette";
import React from "react";
import { styled } from "styled-components";
import map from "@assets/univMap.svg";
import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { mapData } from "@utils/data";
import { Text } from "@components/atoms/Text";

const Map = () => {
  return (
    <MapContainer>
      <Flex>
        <MapImg src={map} alt="map" />
        <Space height={"25px"} />
        <Flex direction="row" justify="start" gap={6} wrap="wrap">
          {[...mapData].splice(0, mapData.length - 1).map((el, idx) => (
            <MapItem key={idx}>
              <Text cursor="pointer">{el}</Text>
            </MapItem>
          ))}
        </Flex>
        <Space height={"21px"} />
        <MapItem>
          <Text cursor="pointer">확인</Text>
        </MapItem>
      </Flex>
    </MapContainer>
  );
};

const MapItem = styled.div`
  background-color: ${palette.color_line};
  width: 103px;
  height: 28px;
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
  top: 18px;
  width: 100%;
  padding: 20px;
  background-color: ${palette.color_beige};
`;

export default Map;
