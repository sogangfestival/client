import Header from "@components/organisms/Header";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { Space } from "@components/atoms/Space";
import { styled, css, keyframes } from "styled-components";
import Line from "@assets/line.svg";
import { palette } from "@styles/palette";
import Arrow from "@assets/arrow.svg";
import React, { useState, useRef, useEffect } from "react";
import schoolmap from "@assets/map.png";
import ItemBox from "./component/ItemBox";
import PullBar from "@assets/pullbar.png";
import BottomBar from "@assets/bottombar.png";
import { mapData } from "@utils/maindata";
import indicator from "@assets/indicator.svg";
import Blue1 from "@assets/Blue1.png";
import Blue2 from "@assets/Blue2.svg";
import { blueData } from "@utils/maindata";
import axios from "axios";
import Footer from "@components/organisms/Footer";

const Map = () => {
  const apiKey = process.env.REACT_APP_FOUND_PW;
  const apiUrl = process.env.REACT_APP_SERVERL_URL;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/bluemarble/buildings/`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState({});
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [toggleSwitch, setToggleSwitch] = useState("학교");
  const menuRef = useRef(null);

  const handleResetButtonClick = () => {
    setSelectedButtons([]);
  };

  useEffect(() => {
    const handleClickeInsideMenu = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        return;
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickeInsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickeInsideMenu);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSelectedButton = (buttonName) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(buttonName)) {
        return prevSelectedButtons.filter((name) => name !== buttonName);
      } else {
        return [...prevSelectedButtons, buttonName];
      }
    });
  };

  return (
    <Flex>
      <ToggleBtn>
        <Flex direction="row" height="100%">
          <ChoiceWrapper
            onClick={() => {
              setToggleSwitch("학교");
            }}
            isClicked={toggleSwitch === "학교"}
          >
            <Text
              size={12}
              cursor="pointer"
              color={
                toggleSwitch === "학교"
                  ? palette.color_wine
                  : palette.color_beige
              }
            >
              학교
            </Text>
          </ChoiceWrapper>
          <ChoiceWrapper
            onClick={() => {
              setToggleSwitch("이벤트");
            }}
            isClicked={toggleSwitch === "이벤트"}
          >
            <Text
              size={12}
              cursor="pointer"
              color={
                toggleSwitch === "이벤트"
                  ? palette.color_wine
                  : palette.color_beige
              }
            >
              이벤트
            </Text>
          </ChoiceWrapper>
        </Flex>
      </ToggleBtn>
      <Header style={{ position: "relative" }} />
      <Footer />
      <Flex direction="column" height="40px" justify="start">
        <Text size={15}>지도</Text>
      </Flex>
      {toggleSwitch === "학교" ? (
        <>
          <SelectionContainer>
            <Flex
              direction="column"
              height="100%"
              width="100%"
              justify="center"
              align="center"
            >
              <Flex direction="row" justify="space-around">
                <SelectionBtn onClick={toggleMenu}>
                  <Flex
                    direction="row"
                    height="100%"
                    justify="center"
                    align="center"
                  >
                    <Text color={palette.color_wine} size={12}>
                      건물 이름
                    </Text>
                  </Flex>
                  <img
                    src={Arrow}
                    style={{ position: "absolute", top: "48%", right: "5%" }}
                  />
                </SelectionBtn>
                <img src={Line} />
                <Text
                  size={12}
                  cursor="pointer"
                  color={palette.color_beige}
                  onClick={handleResetButtonClick}
                >
                  초기화
                </Text>
              </Flex>
            </Flex>
          </SelectionContainer>
          <Flex width="100%" height="400px" justify="center" align="center">
            <MapWrapper>
              <img src={schoolmap} alt="map" width={"332px"} height={"238px"} />
              <IndicatorContainer x={285} y={163}>
                <img
                  src={indicator}
                  alt="indicator"
                  width={"16px"}
                  height={"23px"}
                />
              </IndicatorContainer>
              {mapData.map((el) => (
                <IndicatorContainer
                  isClicked={selectedButtons.includes(el.name)}
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
          </Flex>
          <Flex>
            <Menu isOpen={isMenuOpen} ref={menuRef}>
              <Flex gap={10}>
                <img src={PullBar} style={{ cursor: "pointer" }} />
                <Text size={15} color={palette.color_mainText}>
                  건물 목록
                </Text>
                <Space height={15} />
                <img data={BottomBar} />
                <Flex
                  direction="row"
                  width="80%"
                  wrap="wrap"
                  gap={10}
                  justify="start"
                >
                  {[...mapData].splice(0, mapData.length).map((el, idx) => (
                    <TagBtn
                      isClicked={selectedButtons.includes(el.name)}
                      key={idx}
                      onClick={() => toggleSelectedButton(el.name)}
                    >
                      <Text
                        color={
                          selectedButtons.includes(el.name)
                            ? palette.color_beige
                            : palette.color_wine
                        }
                        cursor="pointer"
                      >
                        {el.name}
                      </Text>
                    </TagBtn>
                  ))}
                </Flex>
              </Flex>
            </Menu>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <img src={Blue1} />
            <object data={Blue2} type="image/svg+xml" />
            <Flex direction="column" gap={15}>
              <Flex height="50px">
                <Text color={palette.color_mainText} size={25}>
                  부루마블 이벤트 현황
                </Text>
              </Flex>
              {[...data].splice(0, data.length).map((el, idx) => (
                <ItemBox
                  height="65px"
                  width="100%"
                  background={palette.color_wine}
                  justify="start"
                  direction="row"
                  align="center"
                >
                  <Flex width="105px" justify="center" direction="row">
                    <Text
                      size={el.building_name.length >= 6 ? 16 : 18.75}
                      color={palette.color_beige}
                    >
                      {el.building_name}
                    </Text>
                  </Flex>
                  <Flex width="150px" justify="center" direction="row">
                    <Text size={18.75} color={palette.color_beige}>
                      {el.team}
                    </Text>
                  </Flex>
                  <Flex width="105px">
                    <Text size={18.75} color={palette.color_beige}>
                      {el.price}
                    </Text>
                  </Flex>
                </ItemBox>
              ))}
            </Flex>
            <Space height={"90px"} />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Map;

const SelectionContainer = styled.div`
  height: 77px;
  width: 100%;
  background-color: ${palette.color_wine};
`;

const SelectionBtn = styled.div`
  width: 252px;
  height: 23px;
  border-radius: 10px;
  background: ${palette.color_beige};
  position: relative;
  cursor: pointer;
`;

const Menu = styled.div`
  width: 100%;
  max-width: 364px;
  background-color: white;
  z-index: 1;
  transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
  bottom: ${(props) => (props.isOpen ? "0" : "-100%")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: transform 0.3s ease, opacity 0.3s ease;
  position: fixed;
  touch-action: pan-y; /* Enable vertical panning */
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  /* Add more styles as needed */
`;

const TagBtn = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  background-color: ${({ isClicked }) =>
    isClicked ? palette.color_wine : palette.color_beige};
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

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 40px;
`;

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

const ToggleBtn = styled.div`
  width: 148px;
  height: 25px;
  border-radius: 10px;
  background-color: ${palette.color_wine};
  position: absolute;
  top: 517px;
`;

const ChoiceWrapper = styled.div`
  width: 72px;
  height: 19px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isClicked ? palette.color_beige : palette.color_wine};
  cursor: pointer;
  z-index: 1;
`;
