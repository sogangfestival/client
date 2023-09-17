import Header from "@components/organisms/Header";
import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { Space } from "@components/atoms/Space";
import { styled, css, keyframes } from "styled-components";
import Line from "@assets/line.svg";
import { palette } from "@styles/palette";
import Arrow from "@assets/arrow.svg";
import React, { useState, useRef, useEffect } from "react";
import Map from "@assets/schoolmap.svg";
import ItemBox from "./components/ItemBox";
import PullBar from "@assets/pullbar.png";
import BottomBar from "@assets/bottombar.png";
import { mapData } from "@utils/maindata";
import indicator from "@assets/indicator.svg";
import Blue1 from "@assets/Blue1.png";
import Blue2 from "@assets/Blue2.svg";
import { blueData } from "@utils/maindata";
import axios from "axios";

const Home = () => {
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
              <img src={Map} />
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
          <Flex direction="column" gap={15}>
            <Flex height="50px">
              <Text color={palette.color_mainText} size={25}>
                푸드트럭 안내
              </Text>
            </Flex>
            <Flex height="40px">
              <Text color={palette.color_wine} size={20}>
                K-GN
              </Text>
            </Flex>
            <ItemBox width="80%" height="140px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Text size={14} weight={700} color={palette.color_mainText}>
                      곱창좋은날ㆍ곱창
                    </Text>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;기본</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        13,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;중</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        18,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;기본</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        23,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="108px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Text size={14} weight={700} color={palette.color_mainText}>
                      고피자ㆍ피자
                    </Text>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;아메리칸 치즈 피자</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;오리지널 페퍼로니 피자</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        12,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;미스터블랙ㆍ흑돼지덮밥</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        9,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;그레잇ㆍ크레페</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        6,0 ~ 8,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;비포ㆍ커피&칵테일&음료</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        3,5 ~ 5,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="108px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Text size={14} weight={700} color={palette.color_mainText}>
                      체리블라썸
                    </Text>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;타코야끼</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        6,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;소떡소떡</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        4,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;블랙래빗ㆍ닭강정</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10,0 / 15,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;스낵런ㆍ탕후루</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        3,5 ~ 4,5
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={13}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;월드푸드ㆍ츄러스&회오리감자</div>
                      </Text>
                      <Text
                        size={13}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        4,0 / 4,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="140px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Text size={14} weight={700} color={palette.color_mainText}>
                      무빙스낵ㆍ분식
                    </Text>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;떡볶이</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        5,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;순대</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        5,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;튀김</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        3,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <Flex height="40px">
              <Text color={palette.color_wine} size={20}>
                CY-J
              </Text>
            </Flex>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;흔남스시ㆍ불초밥</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10,0 ~ 12,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;짱츄닭ㆍ수제닭꼬치</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        5,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="140px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Text size={14} weight={700} color={palette.color_mainText}>
                      블랙스테이크ㆍ스테이크
                    </Text>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;싱글</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;더블</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        15,0
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={400}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;덮밥</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;탑클래스ㆍ케밥&소시지</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        4,0 ~ 9,0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
            <ItemBox width="80%" height="50px" background={palette.color_icon}>
              <Flex>
                <Flex width="80%" height="100%">
                  <Flex
                    width="100%"
                    height="100%"
                    direction="row"
                    justify="start"
                  >
                    <Flex justify="space-between" direction="row">
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        <div>&nbsp;&nbsp;에이치키친ㆍ야끼소바</div>
                      </Text>
                      <Text
                        size={14}
                        weight={700}
                        color={palette.color_mainText}
                      >
                        10.0
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </ItemBox>
          </Flex>
          <Flex>
            <Menu isOpen={isMenuOpen} ref={menuRef}>
              <Flex gap={10}>
                <img src={PullBar} />
                <Text size={15} color={palette.color_mainText}>
                  건물 목록
                </Text>
                <Space height={15} />
                <img src={BottomBar} />
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
            <img src={Blue2} />
            <Flex direction="column" gap={15}>
              <Flex height="50px">
                <Text color={palette.color_mainText} size={25}>
                  부루마블 이벤트 현황
                </Text>
              </Flex>
              {[...data].splice(0, data.length).map((el, idx) => (
                <ItemBox
                  height="65px"
                  width="80%"
                  background={palette.color_wine}
                  justify="space-around"
                  direction="row"
                  align="center"
                >
                  <Text size={18.75} color={palette.color_beige}>
                    {el.building_name}
                  </Text>
                  <Text size={18.75} color={palette.color_beige}>
                    {el.team}
                  </Text>
                  <Text size={18.75} color={palette.color_beige}>
                    {el.price}
                  </Text>
                </ItemBox>
              ))}
            </Flex>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Home;

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
  height: 23px;
  border-radius: 10px;
  background-color: ${palette.color_wine};
  position: absolute;
  top: 520px;
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
