import React from "react";
import styled from "styled-components";
import MapIcon from "@assets/mapIcon.png";
import TruckIcon from "@assets/truckIcon.png";
import CalIcon from "@assets/calIcon.png";
import LostIcon from "@assets/lostIcon.png";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import { Link } from "react-router-dom";
import HomeIcon from "@assets/homeIcon.png";

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
    path: "/",
    name: "HOME",
    src: HomeIcon,
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
            <div
              style={{ height: "51px", display: "flex", alignItems: "center" }}
            >
              <Link to={el.path}>
                <EachIcon name={el.name}>
                  <img src={el.src} style={{ cursor: "pointer" }} />
                </EachIcon>
              </Link>
            </div>
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ name }) => (name === "HOME" ? "50%" : "10px")};
  width: ${({ name }) => (name === "HOME" ? "51px" : "41px")};
  height: ${({ name }) => (name === "HOME" ? "51px" : "41px")};
  background-color: ${({ name }) =>
    name === "HOME" ? "white" : palette.color_wine};
  box-shadow: ${({ name }) =>
    name === "HOME" ? "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" : "no"};
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
