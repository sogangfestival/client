import React from "react";
import Back from "@components/molecules/Back";
import Header from "@components/organisms/Header";
import Flex from "@components/atoms/Flex";
import styled from "styled-components";
import { palette } from "@styles/palette";
import { useState } from "react";
import { Text } from "@components/atoms/Text";
import left from "@assets/leftPage.svg";
import right from "@assets/rightPage.svg";
import yena from "@assets/yena.svg";
import bignaughty from "@assets/bignaughty.svg";
import ydbband from "@assets/ydbband.svg";
import akmu from "@assets/akmu.svg";
import ph1 from "@assets/ph1.svg";
import yesterday from "@assets/yesterday.svg";
import nextday from "@assets/nextday.svg";
import { Space } from "@components/atoms/Space";
const Schedule = () => {
  const [toggleSwitch, setToggleSwitch] = useState("축제일정");
  const [EventSwitch, setEventSwitch] = useState("월");

  const EventData = {
    월: ["DEAR.X", "다나와", "노고체전 농구 예선", "노고체전 축구 8강"],
    화: [
      "DEAR.X",
      "에어바운스",
      "단위별 부스",
      "노고체전 축구 4강",
      "노고체전 농구 준결승",
      "노고체전 루미큐브",
      "노고체전 계주",
    ],
    수: [
      "노고체전 롤",
      "에어바운스",
      "단위별 부스",
      "노고체전 축구 4강",
      "노고체전 농구 결승",
      "노고체전 짱피구",
    ],
    목: ["부루마불", "동아리 공연", "아티스트 본판"],
    금: ["부루바불", "학회, 소모임 및 밴드 공연", "아티스트 본판"],
  };

  return (
    <Flex>
      <ScheduleTop>
        <Header />
      </ScheduleTop>
      <SwitchWrapper>
        <ToggleBtn>
          <Flex direction="row" height="100%">
            <ChoiceWrapper>
              <img
                src={left}
                onClick={() => {
                  if (toggleSwitch === "축제일정") {
                    setToggleSwitch("이벤트");
                  } else {
                    setToggleSwitch("축제일정");
                  }
                }}
              />
            </ChoiceWrapper>
            {toggleSwitch === "축제일정" ? (
              <Flex width="191px">
                <Text size={20} color={palette.color_wine} weight={700}>
                  2023 카디널 축제일정{" "}
                </Text>
              </Flex>
            ) : (
              <Flex width="191px">
                <Text size={20} color={palette.color_wine} weight={700}>
                  연예인 라인업
                </Text>
              </Flex>
            )}
            <ChoiceWrapper>
              <img
                src={right}
                onClick={() => {
                  if (toggleSwitch === "축제일정") {
                    setToggleSwitch("이벤트");
                  } else {
                    setToggleSwitch("축제일정");
                  }
                }}
              />
            </ChoiceWrapper>
          </Flex>
        </ToggleBtn>
      </SwitchWrapper>
      {toggleSwitch === "축제일정" ? (
        <Flex>
          <TitleSection>
            <Text size={20} color="white" weight={700}>
              CONTENTS: TIME TABLE
            </Text>
          </TitleSection>
          <TableSection></TableSection>
          <Divider />
          <AlwaysEvent>
            <TitleSection>
              <Text size={20} color="white" weight={700}>
                상시 컨텐츠
              </Text>
            </TitleSection>
            <Text size={14} color="white" weight={700}>
              <Flex direction="row" align="start">
                <Flex direction="column">
                  <Place>알바탑 앞</Place>
                  <Event>
                    <Text size={10} weight={600}>
                      에어 조형물 포토존
                    </Text>
                  </Event>
                </Flex>
                <Flex direction="column">
                  <Place>청년광장</Place>
                  <Event>갤럭시 프로모션</Event>
                  <Event>축준단 부스</Event>
                  <Event>포토부스</Event>
                </Flex>
                <Flex direction="column">
                  <Place>TE관</Place>
                  <Event>포토부스</Event>
                </Flex>
              </Flex>
            </Text>

            <Text size={12} color="white" weight={700}>
              <Flex direction="row">
                <Flex direction="column">
                  <Place>K-GN 사잇길 </Place>
                  <Event>푸드트럭</Event>
                </Flex>
                <Flex direction="column">
                  <Place>K관 운동장 앞 </Place>
                  <Event>인도미 부스</Event>
                </Flex>
                <Flex direction="column">
                  <Place>J-CY 사잇길 </Place>
                  <Event>푸드트럭</Event>
                </Flex>
              </Flex>
            </Text>
          </AlwaysEvent>

          <Divider />
          <TitleSection>
            <Text size={20} color="white" weight={700}>
              요일별 컨텐츠
            </Text>
          </TitleSection>
          <OccasionalEvent>
            <OccasionSwitch>
              <img
                src={yesterday}
                onClick={() => {
                  switch (EventSwitch) {
                    case "월":
                      setEventSwitch("금");
                      break;
                    case "화":
                      setEventSwitch("월");
                      break;
                    case "수":
                      setEventSwitch("화");
                      break;
                    case "목":
                      setEventSwitch("수");
                      break;
                    case "금":
                      setEventSwitch("목");
                      break;
                    default:
                      setEventSwitch("월"); // 기본값 설정
                  }
                }}
              />
              <Text size={14} color="white" weight={700}>
                {EventSwitch === "월"
                  ? "월"
                  : EventSwitch === "화"
                  ? "화"
                  : EventSwitch === "수"
                  ? "수"
                  : EventSwitch === "목"
                  ? "목"
                  : "금"}
              </Text>

              <img
                src={nextday}
                onClick={() => {
                  switch (EventSwitch) {
                    case "월":
                      setEventSwitch("화");
                      break;
                    case "화":
                      setEventSwitch("수");
                      break;
                    case "수":
                      setEventSwitch("목");
                      break;
                    case "목":
                      setEventSwitch("금");
                      break;
                    case "금":
                      setEventSwitch("월");
                      break;
                    default:
                      setEventSwitch("월"); // 기본값 설정
                  }
                }}
              />
            </OccasionSwitch>
            <EventList>
              <Text>
                {Object.keys(EventData).map((day) => (
                  <div key={day}>
                    {EventSwitch === day ? (
                      <EventRow>
                        {EventData[day].map((event, eventIndex) => (
                          <EventBox
                            key={eventIndex}
                            smallFont={event.length > 7 && event.length <= 15}
                          >
                            {event}
                          </EventBox>
                        ))}
                      </EventRow>
                    ) : null}
                  </div>
                ))}
              </Text>
            </EventList>
          </OccasionalEvent>
        </Flex>
      ) : (
        <Flex>
          <Divider />
          <TitleSection>
            <Text size={20} color="white" weight={700}>
              연예인 라인업
            </Text>
          </TitleSection>
          <ContentSection>
            <Date>
              <Text size={14} color="white" weight={700}>
                09.22(목)
              </Text>
            </Date>
            <Flex direction="row" justify="center">
              <ImageBox>
                {" "}
                <img src={bignaughty} />
                <Text size={12} color="white" weight={700}>
                  빅나티
                </Text>
              </ImageBox>
              <ImageBox>
                <img src={yena} />
                <Text size={12} color="white" weight={700}>
                  최예나
                </Text>
              </ImageBox>
            </Flex>
            <Divider />
            <Date>
              <Text size={14} color="white" weight={700}>
                09.23(금)
              </Text>
            </Date>
            <Flex direction="row" justify="center">
              <ImageSmall>
                <img src={ph1} />

                <Text size={10} color="white" weight={700}>
                  PH-1
                </Text>
              </ImageSmall>
              <ImageHor>
                <img src={ydbband} />
                <Text size={10} color="white" weight={700}>
                  유다빈 밴드
                </Text>
              </ImageHor>
            </Flex>
            <ImageBig>
              <img src={akmu} />
              <Text size={20} color="white" weight={700}>
                AKMU
              </Text>
            </ImageBig>
          </ContentSection>
        </Flex>
      )}
    </Flex>
  );
};

export default Schedule;
const ScheduleTop = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  direction: row;
  align-items: center;
  justify-content: center;
`;
const ToggleBtn = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwitchWrapper = styled.div`
  width: 100%;
`;

const ChoiceWrapper = styled.div`
  width: 50px;
  height: 19px;
`;
const Divider = styled.div`
  width: 228px;
  height: 2px;
  margin-top: 34px;
  background-color: #626262;
`;
const TitleSection = styled.div`
  background-color: ${palette.color_wine};
  width: 313px;
  height: 33px;
  border-radius: 5px;
  margin: 13px;
  padding: 5px;
  box-shadow: 0px 4px 5px gray;
`;
const Date = styled.div`
  background-color: ${palette.color_wine};
  width: 143px;
  height: 27px;
  border-radius: 28px;
  margin-top: 13px;
  padding: 5px;
`;
const ImageBox = styled.div`
  background-color: ${palette.color_wine};
  width: 125px;
  height: 156px;
  border-radius: 5px;
  margin: 15px 15px 0px;
  box-shadow: 0px 4px 5px gray;
  padding: 4.5px;
`;
const ContentSection = styled.div``;
const ImageSmall = styled.div`
  background-color: ${palette.color_wine};
  width: 90px;
  height: 107px;
  border-radius: 5px;
  margin: 15px 8px 0px;
  box-shadow: 0px 4px 5px gray;
  padding: 4px;
`;
const ImageHor = styled.div`
  background-color: ${palette.color_wine};
  width: 138px;
  height: 107px;
  border-radius: 5px;
  margin: 15px 8px 0px;
  box-shadow: 0px 4px 5px gray;
  padding: 4px;
`;
const ImageBig = styled.div`
  background-color: ${palette.color_wine};
  width: 164px;
  height: 196px;
  border-radius: 5px;
  margin: 15px 15px 30px;
  box-shadow: 0px 4px 5px gray;
  padding: 4px 6px;
`;
const Place = styled.div`
  background-color: ${palette.color_wine};
  width: 100px;
  height: 25px;
  border-radius: 5px;
  margin: 10px 6px;
  padding: 5px;
  box-shadow: 0px 4px 5px gray;
`;
const AlwaysEvent = styled.div``;
const OccasionalEvent = styled.div`
  margin-bottom: 80px;
`;
const OccasionSwitch = styled.div`
  background-color: ${palette.color_wine};
  width: 99px;
  height: 23px;
  border-radius: 55px;
  margin: 8px 6px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Event = styled.div`
  border-color: ${palette.color_beige};
  width: 99px;
  height: 24px;
  border-radius: 5px;
  margin: 3px 6px;
  padding: 2px;
  font-size: 12px;
  color: black;
  font-weight: 700;
  box-shadow: 0px 2px 5px gray;
  vertical-align: middle;
`;
const EventList = styled.div``;
const EventRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventBox = styled.div`
  border: 1px solid ${palette.color_beige};
  width: 99px;
  height: 24px;
  border-radius: 5px;
  margin: 3px 6px;
  padding: 2px;
  font-size: 12px;
  color: black;
  font-weight: 700;
  box-shadow: 0px 2px 5px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  font-size: ${(props) =>
    props.smallFont
      ? props.verySmallFont
        ? "9px"
        : "10px"
      : "12px"}; // 조건부로 폰트 크기 지정
`;
const TableSection = styled.div`
  width: 364px;
  height: 180px;
  background-color: ${palette.color_beige};
  border-radius: 14px;
`;
