import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import Back from "@components/molecules/Back";
import Tag from "@pages/Lost/components/Tag";
import { palette } from "@styles/palette";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import iphone from "@assets/iphone.jpg";
import Reply from "./components/Reply";
import SearhImg from "@assets/search2.svg";
import kakao from "@assets/kakao.svg";
import copy from "@assets/copy.svg";
import Service from "services/sgFestival";
import { calculateTime } from "@utils/lib";
import MetaTag from "SEO";
import { config } from "@utils/SEOConfig";
import logo from "@assets/logo.png";
import { Helmet } from "react-helmet-async";

const DetailLost = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState(undefined);
  const [parent_comment, setParent] = useState("");
  const [pwd, setPwd] = useState(1);

  const postComment = async () => {
    if (!comment) {
      alert("최소 1자 이상 적어주세요");
      return;
    }
    try {
      const data = await Service.postComments({
        id,
        comment,
        parent_comment,
        pwd,
      });
      getPost();
      setParent("");
    } catch (err) {
      console.error(err);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  const getPost = async () => {
    try {
      const { data } = await Service.getEachPost(id);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) {
      getPost();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>2023 CARDINAL : 응답하라 서강</title>
        <meta name="keywords" content="분실물" />
        <meta name="description" content={data?.content} />
        <meta name="image" content={data?.image1 || logo} />
        <meta property="og:site_name" content="2023 CARDINAL : 응답하라 서강" />
        <meta
          property="og:url"
          content={`https://www.sgucardinal.com/lost/${id}`}
        />
        <link rel="canonical" href={`https://www.sgucardinal.com/lost/${id}`} />
        <meta property="og:image" content={data?.image1 || logo} />
        <meta property="og:description" content={data?.content} />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={data?.content} />
        <meta name="twitter:image" content={data?.image1 || logo} />
      </Helmet>

      {data ? (
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
                    {data?.title}
                  </Text>
                  <Text color={palette.color_subText} size={10} weight={400}>
                    {data.created_at ? calculateTime(data.created_at) : ""}
                  </Text>
                </Flex>
                <Flex direction="row" justify="start" gap={18}>
                  {data.place ? (
                    <Tag padding="5px 8px" bgColor={palette.color_wine}>
                      <Text
                        size={10}
                        weight={500}
                        lineHeight="100%"
                        color={palette.color_white}
                      >
                        #{data?.place[0]}
                      </Text>
                    </Tag>
                  ) : (
                    ""
                  )}

                  {data.type ? (
                    <Tag padding="5px 8px" bgColor={palette.color_wine}>
                      <Text
                        size={10}
                        weight={500}
                        lineHeight="100%"
                        color={palette.color_white}
                      >
                        #{data?.type[0]}
                      </Text>
                    </Tag>
                  ) : (
                    ""
                  )}

                  {data.color ? (
                    <Tag padding="5px 8px" bgColor={palette.color_wine}>
                      <Text
                        size={10}
                        weight={500}
                        lineHeight="100%"
                        color={palette.color_white}
                      >
                        #{data?.color[0]}
                      </Text>
                    </Tag>
                  ) : (
                    ""
                  )}
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
              <ContentImg
                alt="contentImg"
                src={data.image1 ? data.image1 : iphone}
              />
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
            <Flex align="start" gap={15}>
              {data?.comments?.map((el, idx) => (
                <Reply setParent={setParent} {...el} key={idx} />
              ))}
            </Flex>
            <Space height={"20px"} />
            <InputWrapper>
              <Flex direction="row" justify="space-between" gap={10}>
                <SearhInput
                  placeholder={"댓글을 입력하세요"}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <img
                  onClick={() => postComment()}
                  style={{ cursor: "pointer" }}
                  src={SearhImg}
                  alt="search"
                />
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
      ) : (
        ""
      )}
    </>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  padding: 18px;
`;

const InputWrapper = styled.div`
  background-color: white;
  bottom: 0px;
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
