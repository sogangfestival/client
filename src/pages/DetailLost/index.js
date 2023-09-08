import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import Back from "@components/molecules/Back";
import Tag from "@pages/Lost/components/Tag";
import { palette } from "@styles/palette";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import iphone from "@assets/iphone.jpg";
import Reply from "./components/Reply";
import SearhImg from "@assets/search2.svg";
import kakao from "@assets/kakao.svg";
import copy from "@assets/copy.svg";

const dummy = {
  id: 1,
  title: "아이폰 18 PRO",
  time: "2023.09.22 18:01",
  tags: [
    {
      type: "location",
      name: "우정원",
    },
    {
      type: "product",
      name: "전자기기",
    },
    {
      type: "color",
      name: "블랙",
    },
  ],
  src: undefined,
  content:
    "대운동장에서 발견한 아이폰 18 Pro입니다. 블랙 컬러에 강아지 그립톡이 붙어있습니다. 학생회에서 보관 중이니 주인은 우정원으로 와주시길 바랍니다.",
  reply: [
    {
      id: 1,
      name: "알로스1",
      postTime: "2023-09-05 15:00",
      content: "제 것 같습니다! 내일까지 찾으러 가겠습니다ㅠㅠ",
      reReply: [
        {
          id: 1,
          name: "작성자",
          postTime: "2023-09-05 15:00",
          content: "그거 참 다행이군요",
        },
      ],
    },
  ],
};

const DetailLost = () => {
  const { id } = useParams();
  const [data, setData] = useState(dummy);
  const [search, setSearch] = useState(undefined);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <Flex align="start">
      <DetailTop>
        <Flex gap={99} direction="row" justify="start">
          <Back />
          <Text size={18} weight={700}>
            분실물 게시판
          </Text>
        </Flex>
      </DetailTop>
      <LostData>
        <Flex align="start">
          <Flex align="start" gap={15}>
            <Flex align="start" gap={6}>
              <Text size={16} weight={700}>
                {data.title}
              </Text>
              <Text color={palette.color_subText} size={10} weight={400}>
                {data.time}
              </Text>
            </Flex>
            <Flex direction="row" justify="start" gap={18}>
              {data.tags.map((el, idx) => (
                <Tag padding="5px 8px" bgColor={palette.color_wine} key={idx}>
                  <Text
                    size={10}
                    weight={500}
                    lineHeight="100%"
                    color={palette.color_white}
                  >
                    #{el.name}
                  </Text>
                </Tag>
              ))}
            </Flex>
          </Flex>
          <Space height={"14px"} />
        </Flex>
      </LostData>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: palette.color_line,
        }}
      ></div>
      <Space height={"29px"} />
      <ContentSpace>
        <Flex align="start">
          <ContentImg alt="contentImg" src={data.src ? data.src : iphone} />
          <Space height={"30px"} />
          <Text align="start" size={12} weight={500}>
            {data.content}
          </Text>
          <Space height={"23px"} />
        </Flex>
      </ContentSpace>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: palette.color_line,
        }}
      ></div>
      <ReplySpace>
        <Flex align="start">
          {data.reply.map((el, idx) => (
            <Reply {...el} key={idx} />
          ))}
        </Flex>
        <Space height={"20px"} />
        <InputWrapper>
          <Flex direction="row" justify="space-between" gap={10}>
            <SearhInput
              placeholder={"댓글을 입력하세요"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <img src={SearhImg} alt="search" />
          </Flex>
        </InputWrapper>
      </ReplySpace>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: palette.color_line,
        }}
      ></div>
      <FooterContainer>
        <Flex justify="end" gap={12} direction="row">
          <img
            style={{ borderRadius: "50%" }}
            src={kakao}
            alt="kakao"
            width={"27px"}
            height={"27px"}
          />
          <img
            onClick={() => copyLink()}
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={copy}
            alt="copy"
            width={"24px"}
            height={"24px"}
          />
        </Flex>
      </FooterContainer>
    </Flex>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding: 18px;
`;

const InputWrapper = styled.div`
  border-radius: 5px;
  padding: 5px 10px 6px 10px;
  border: 0.5px solid ${palette.color_wine};
`;

const SearhInput = styled.input`
  border: none;
  width: 100%;
  font-size: 10px;
  font-family: Noto Sans KR;
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 10px;
    font-family: Noto Sans KR;
    font-weight: 400;
    color: ${palette.color_wine};
  }
`;

const ReplySpace = styled.div`
  width: 100%;
  padding: 20px 18px;
`;

const ContentImg = styled.img`
  object-fit: cover;
  width: 100%;
`;

const ContentSpace = styled.div`
  width: 100%;
  padding: 18px;
`;

const DetailTop = styled.div`
  width: 100%;
  padding: 55px 18px 25px 18px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const LostData = styled.div`
  width: 100%;
  padding: 39px 18px 14px 18px;
`;

export default DetailLost;
