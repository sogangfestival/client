import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import Back from "@components/molecules/Back";
import Header from "@components/organisms/Header";
import { palette } from "@styles/palette";
import React, { useState } from "react";
import styled from "styled-components";
import logoWhite from "@assets/logo_white.svg";
import mainCard1 from "@assets/mainCard_1.png";
import Footer from "@components/organisms/Footer";
import event1 from "@assets/event1.svg";
import event2 from "@assets/event2.svg";
import event3 from "@assets/event3.svg";
import event4 from "@assets/event4.svg";
import logo from "@assets/logo.svg";
import MainModal from "./components/MainModal";
import { useTheme } from "@components/templates/ThemeProvider";
import { Link } from "react-router-dom";
import people from "@assets/people.svg";
import seo from "@assets/seo.png";

const curEvent = [
  {
    title: "엠마오 이스케이프: dear.X",
    desc: "과연 💘첫사랑 후보들💘 중에 엄마의 진짜 첫사랑은 누구일까?",
    src: event1,
  },
  {
    title: "응 다 팔아~ 서강문방구",
    desc: "게임에 성공해 추억의 불량식품을 획득하자!",
    src: event2,
  },
  {
    title: "학교종이 땡!땡!땡!",
    desc: "교수님을 피해 챌린지 런!",
    src: event3,
  },
  {
    title: "한강말고 서강: 엠뚜에서 낭만찾기",
    desc: "캠핑의 메카, 이제는 한강보다 서강이라고!",
    src: undefined,
  },
  {
    title: "부루마불: 서강 보드 미니게임",
    desc: "서강대학교 보드 미니게임",
    src: event4,
  },
];
const Home = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  const [curModal, setCurModal] = useState(undefined);
  return (
    <div style={{ width: "100%", positon: "relative" }}>
      {ThemeMode === "onModal" ? (
        <MainModal curModal={curModal} closeModal={toggleTheme} />
      ) : (
        ""
      )}
      <Header />
      <Footer />
      <HomeContainer>
        <Flex>
          <Space height={"10px"} />
          <TopSlogan>
            <Flex justify="start" align="start">
              <Text color={palette.color_wine} size={24} weight={700}>
                서강대학교
              </Text>
              <Text color={palette.color_wine} size={24} weight={700}>
                카디널 : 2023
              </Text>
              <Space height={"10px"} />
              <Text color={palette.color_subText} size={14} weight={400}>
                새로운 이름과 함께 다시 태어난
              </Text>
              <Text color={palette.color_subText} size={14} weight={400}>
                서강대학교의 하반기 대축제
              </Text>
            </Flex>
          </TopSlogan>
          <Space height={"16px"} />
          <div
            onClick={() => {
              setCurModal("main");
              toggleTheme("onModal");
            }}
            style={{ position: "relative", width: "100%", cussor: "pointer" }}
          >
            <MainCard alt="main" src={mainCard1} />
            <object
              style={{
                cursor: "pointer",
                position: "absolute",
                zIndex: 2,
                left: "8px",
                top: "120px",
              }}
              type="image/svg+xml"
              data={logoWhite}
            />
          </div>
          <Space height={"10px"} />
          <Flex align="start">
            <Text align="start" size={24} weight={700}>
              진행중인 이벤트
            </Text>
          </Flex>
          <EventContainer>
            <Flex justify="start" align="start">
              <Space height={"13px"} />
              <>
                <Flex wrap="noWrap" direction="row" justify="start" gap={12}>
                  {curEvent.map((el, idx) => (
                    <div
                      onClick={() => {
                        setCurModal(idx);
                        toggleTheme("onModal");
                      }}
                      key={el.title}
                      style={{
                        cursor: "pointer",
                        width: "118px",
                        height: "180px",
                        backgroundColor: "white",
                        boxShadow: `0px 4px 5px 0px rgba(125, 1, 38, 0.20)`,
                        borderRadius: "7px",
                      }}
                    >
                      <img
                        src={el.src ? el.src : logo}
                        alt={"event_banner"}
                        style={{ cursor: "pointer", objectFit: "contain" }}
                        width={"115px"}
                        height={"83px"}
                      />
                      <div style={{ width: "100%", padding: "6px" }}>
                        <Flex justify="start" direction="row">
                          <Text
                            wrap="keep-all"
                            align="start"
                            size={13}
                            weight={700}
                            color={palette.color_mainText}
                          >
                            {el.title}
                          </Text>
                        </Flex>
                        <Space height={"5px"} />
                        <Flex justify="start" direction="row">
                          <Text
                            wrap="keep-all"
                            align="start"
                            size={10}
                            weight={400}
                            color={palette.color_subText}
                          >
                            {el.desc}
                          </Text>
                        </Flex>
                      </div>
                    </div>
                  ))}
                </Flex>
              </>
            </Flex>
          </EventContainer>
          <Space height={"19px"} />
          <div style={{ width: "100%" }}>
            <Flex justify="start" align="start">
              <Text align="start" size={24} weight={700}>
                구글폼 신청
              </Text>
              <Space height={"13px"} />
              <CurEventWrapper>
                <EachForm>
                  <Flex direction="row" justify="space-between">
                    <Flex width="auto" direction="row" justify="start" gap={8}>
                      <Link
                        target="blank"
                        style={{ textDecoration: "none" }}
                        to={"https://forms.gle/scwX8QtJLSz42vGq7"}
                      >
                        <Text
                          align="start"
                          cursor="pointer"
                          size={13}
                          weight={500}
                        >
                          🏕 한강 말고 서강 사전예약
                        </Text>
                      </Link>
                      <Flex width="auto" direction="row" justify="start">
                        <object data={people} type="image/svg+xml" />
                        <Text
                          size={13}
                          color={palette.color_subText}
                          weight={700}
                        >
                          6명
                        </Text>
                      </Flex>
                    </Flex>

                    <Text>9.18(월) 11:50~</Text>
                  </Flex>
                </EachForm>
              </CurEventWrapper>
            </Flex>
          </div>
        </Flex>
        <Space height={"120px"} />
        <HomeFooter>
          <Flex align="start">
            <Text weight={700} size={16} color={palette.color_mainText}>
              제작자들
            </Text>
            <Space height={"10px"} />
            <Flex justify="start" direction="row" align="start" gap={20}>
              <Flex width="130px" align="start">
                <Text weight={700} size={10} color={palette.color_subText}>
                  멋쟁이사자처럼
                </Text>
              </Flex>
              <Flex align="start" gap={3}>
                <Flex direction="row" justify="start" gap={4}>
                  <Text weight={700} size={10} color={palette.color_subText}>
                    프론트엔드
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    진민석
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    정고은
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    한우석
                  </Text>
                </Flex>
                <Flex direction="row" justify="start" gap={4}>
                  <Text weight={700} size={10} color={palette.color_subText}>
                    백엔드
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    김성현
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    신선희
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    이건화
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    이우찬
                  </Text>
                </Flex>
                <Flex direction="row" justify="start" gap={4}>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    이종미
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    임정연
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    윤성호
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    윤태호
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Space height={"10px"} />
            <Flex justify="start" direction="row" align="start" gap={20}>
              <Flex width="130px" align="start">
                <Text weight={700} size={10} color={palette.color_subText}>
                  총동아리연합학생회
                </Text>
              </Flex>
              <Flex align="start" gap={3}>
                <Flex direction="row" justify="start" gap={4}>
                  <Text weight={700} size={10} color={palette.color_subText}>
                    총괄
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    범수빈
                  </Text>
                  <Text weight={700} size={10} color={palette.color_subText}>
                    디자인
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    하이은
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Space height={"10px"} />
            <Flex justify="start" direction="row" align="start" gap={20}>
              <Flex width="130px" align="start">
                <Text weight={700} size={10} color={palette.color_subText}>
                  총학생회
                </Text>
              </Flex>
              <Flex align="start" gap={3}>
                <Flex direction="row" justify="start" gap={4}>
                  <Text weight={700} size={10} color={palette.color_subText}>
                    디자인
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    박종현
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    송인준
                  </Text>
                  <Text weight={400} size={10} color={palette.color_subText}>
                    Eunice Gan
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </HomeFooter>
      </HomeContainer>
      <Space height={"90px"} />
    </div>
  );
};

const HomeFooter = styled.div`
  widht: 100%;
  background-color: ${palette.color_icon};
  padding: 6px;
  border-radius: 10px 10px 0px 0px;
`;

const EachForm = styled.div`
  padding: 5px 8px 7px 8px;
  background-color: white;
  box-shadow: 0px 4px 20px 0px rgba(125, 1, 38, 0.2);
  border-radius: 5px;
  border: 1px;
  width: 100%;
`;

const CurEventWrapper = styled.div`
  width: 100%;
`;

const EventContainer = styled.div`
  width: 100%;
  padding: 3px;
  overflow-x: scroll;
`;

const MainCard = styled.img`
  cursor: pointer;
  width: 312px;
  height: 312px;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 20px rgba(125, 1, 38, 0.2));
`;

const MainCardOver = styled.div`
  width: 100%;
  position: absoulte;
`;

const TopBanner = styled.div`
  width: 100%;
`;

const TopSlogan = styled.div`
  width: 100%;
  border-left: 1px solid ${palette.color_wine};
  padding-left: 9px;
`;

const HomeContainer = styled.div`
  width: 100%;
  padding: 0px 24px;
`;

export default Home;
