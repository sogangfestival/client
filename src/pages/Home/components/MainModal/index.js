import Flex from "@components/atoms/Flex";
import React from "react";
import styled from "styled-components";
import close from "@assets/close.svg";
import mainDesc from "@assets/cardinal_desc.png";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";

const curEventDesc = [
  {
    title: "엠마오 이스케이프:\ndear.X",
    desc: "과연 💘첫사랑 후보들💘 중에\n엄마의 진짜 첫사랑은 누구일까?\n\n궁금증을 해결하기 위한 여정이\n엠마오의 한 작은 동아리방에서 시작된다!\n\n🗝일시 :\n9월 18일(월) ~ 9월 19일(화)\n17:00~21:00\n🗝플레이타임 : 25분\n🗝플레이 인원 : 최소 4명 ~ 최대 6명",
  },
  {
    title: "응 다 팔아~\n서강문방구",
    desc: "목.금 10시-16시(청년광장)\n게임에 성공해 추억의 불량식품을 획득하자!\n\n3종의 게임을 통해 간식 받고,\n스탬프 모아 뽑기 참여하세요!",
  },
  {
    title: "학교종이\n땡!땡!땡!",
    desc: "화수 10시-16시(청년광장)\n\n교수님을 피해 챌린지 런!\n\n재빠른 6인에게는\n아웃백, 롯데월드, 영화 관람권을 드립니다!",
  },
  {
    title: "한강말고 서강:\n엠뚜에서 낭만찾기",
    desc: "수목금내 타임별 운영(엠마오관옥상)\n\n캠핑의 메카, 이제는 한강보다 서강이라고!\n타프와 돗자리, 테이블을 무료로 대여할 수 있는\n캠핑존에서 낭만을 찾아보세요!",
  },
  {
    title: "부루마불\n서강 보드 미니게임",
    desc: "학생회관에서 즐겁게 놀던 추억을 회상하며\n철거 직전의 C관을 돌려보던 김서강.\n\n호기심에 상자를 열고\n새어나오는 빛에 정신을 잃은 그.\n\n정신을 차린 그의 눈 앞에\n한 신부님이 나타나 말함다.\n\n“난 테오도르 게페르트,\n학교를 지을 부지를 구하고 있네,\n혹시 자네가 나를 도와줄 수 있는가?”\n\n주사위를 굴려 게페르트 신부를 도와\n서강대학교를 건설하라!",
  },
];

const MainModal = ({ closeModal, curModal }) => {
  return (
    <ModalWrapper>
      <ModalConatiner>
        {curModal === "main" ? (
          <Flex gap={12} align="end">
            <img
              onClick={() => closeModal("offModal")}
              style={{ cursor: "pointer" }}
              src={close}
              alt="close"
            />
            <img
              src={mainDesc}
              alt="cardinal_desc"
              style={{ width: "340px", height: "340px" }}
            />
          </Flex>
        ) : (
          <Flex gap={12} align="end">
            <img
              onClick={() => closeModal("offModal")}
              style={{ cursor: "pointer" }}
              src={close}
              alt="close"
            />
            <Flex>
              <Text
                size={20}
                weight={700}
                color={palette.color_wine}
                whiteSpace={"pre-line"}
              >
                {curEventDesc[curModal].title}
              </Text>
            </Flex>
            <EachEvent>
              <Flex>
                <Text
                  size={12}
                  weight={400}
                  color={palette.color_mainText}
                  whiteSpace={"pre-line"}
                >
                  {curEventDesc[curModal].desc}
                </Text>
              </Flex>
            </EachEvent>
          </Flex>
        )}
      </ModalConatiner>
    </ModalWrapper>
  );
};

const EachEvent = styled.div`
  background-color: ${palette.color_beige};
  padding-top: 20px;
  width: 327px;
  height: 276px;
`;

const ModalWrapper = styled.div`
  width: 360px;
  height: 100vh;
  position: fixed;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

const ModalConatiner = styled.div`
  padding: 16px;
  z-index: 4;
  transform: translateY(40%);
  border-radius: 20px;
  background-color: white;
`;

export default MainModal;
