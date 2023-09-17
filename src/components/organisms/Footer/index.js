import React from "react";
import styled from "styled-components";
import MapIcon from "@assets/mapIcon.svg";
import TruckIcon from "@assets/truckIcon.svg";
import CalIcon from "@assets/calIcon.svg";
import LostIcon from "@assets/lostIcon.svg";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import { Link } from "react-router-dom";

const footerData = [
  {
    path: "/map",
    name: "지도",
    src: MapIcon,
  },
  {
    path: "/food",
    name: "푸드트럭",
    src: TruckIcon,
  },
  {
    path: "/schedule",
    name: " 축제일정",
    src: CalIcon,
  },
  {
    path: "/lost",
    name: "분실물",
    src: LostIcon,
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <Flex direction="row">
        {footerData.map((el) => (
          <Flex gap={5} key={el.name}>
            <Link to={el.path}>
              <EachIcon>
                <img src={el.src} alt="icon" />
              </EachIcon>
            </Link>
            <Text cursor="pointer" size={12} weight={500}>
              {el.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </FooterWrapper>
  );
};

const EachIcon = styled.div`
  padding: 11px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${palette.color_wine};
`;

const FooterWrapper = styled.div`
  width: 360px;
  background-color: white;
  padding: 10px;
  bottom: 0px;
  filter: drop-shadow(0px 4px 20px rgba(125, 1, 38, 0.2));
  border-radius: 10px;
  position: fixed;
  z-index: 3;
`;

export default Footer;
