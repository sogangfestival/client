import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { styled } from "styled-components";
import { palette } from "@styles/palette";
import { useState } from "react";
import { Space } from "@components/atoms/Space";
import SearchImg from "@assets/search.svg";
import Item from "./components/Item";
import left from "@assets/leftPage.svg";
import right from "@assets/rightPage.svg";
import Header from "@components/organisms/Header";
import { useNavigate } from "react-router-dom";
const dummyData = [
  {
    id: 1,
    src: undefined,
    title: "제목이 길어지면 여기까지만 보여주세요 제발!!",
    desc: "내용 첫 번째 줄 입니다. 텍스트 박스 길이는 여기까지____본문이 길어진다면 점점점으로 잘라주세요 제가 LA에 있어서 작업이 힘든데 너무 고생하십니다...",
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
    replyCount: 5,
    postTime: "2023-09-05 15:00",
  },
  {
    id: 2,
    src: undefined,
    title: "제목이 길어지면 여기까지만 보여주세요 제발!!",
    desc: "내용 첫 번째 줄 입니다. 텍스트 박스 길이는 여기까지____본문이 길어진다면 점점점으로 잘라주세요 제가 LA에 있어서 작업이 힘든데 너무 고생하십니다...",
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
    replyCount: 5,
    postTime: "2023-09-06 02:00",
  },
  {
    id: 3,
    src: undefined,
    title: "제목이 길어지면 여기까지만 보여주세요 제발!!",
    desc: "내용 첫 번째 줄 입니다. 텍스트 박스 길이는 여기까지____본문이 길어진다면 점점점으로 잘라주세요 제가 LA에 있어서 작업이 힘든데 너무 고생하십니다...",
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
    replyCount: 5,
    postTime: "2023-09-06 02:00",
  },
  {
    id: 4,
    src: undefined,
    title: "제목이 길어지면 여기까지만 보여주세요 제발!!",
    desc: "내용 첫 번째 줄 입니다. 텍스트 박스 길이는 여기까지____본문이 길어진다면 점점점으로 잘라주세요 제가 LA에 있어서 작업이 힘든데 너무 고생하십니다...",
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
    replyCount: 5,
    postTime: "2023-09-06 02:00",
  },
];

const Lost = () => {
  const [isClicked, setIsClicked] = useState("lost");
  const [search, setSearch] = useState(undefined);
  const [filter, setFilter] = useState({
    location: undefined,
    product: undefined,
    color: undefined,
  });
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const switchTab = (id) => {
    setIsClicked(id);
    setSearch("");
  };

  return (
    <Flex>
      <Header />
      <Flex>
        <TopSwitchWrapper>
          <Flex direction="row">
            <Flex direction="row">
              <StlyedBoard
                onClick={() => switchTab("lost")}
                isClicked={isClicked === "lost"}
              >
                <Text
                  size={12}
                  cursor="pointer"
                  color={isClicked === "lost" ? palette.color_wine : "black"}
                >
                  분실물 게시판
                </Text>
              </StlyedBoard>
            </Flex>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "0px",
                  width: "1px",
                  height: "20px",
                  backgroundColor: palette.color_subText,
                }}
              ></div>
            </div>
            <Flex direction="row">
              <StlyedBoard
                onClick={() => switchTab("found")}
                isClicked={isClicked === "found"}
              >
                <Text
                  size={12}
                  cursor="pointer"
                  color={isClicked === "found" ? palette.color_wine : "black"}
                >
                  습득물 게시판
                </Text>
              </StlyedBoard>
            </Flex>
          </Flex>
        </TopSwitchWrapper>
        <Space height={"25px"} />
        <InputContainer>
          <InputWrapper>
            <Flex direction="row" justify="space-between" gap={10}>
              <SearhInput
                placeholder={"물건을 검색해보세요"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={SearchImg} alt="search" />
            </Flex>
          </InputWrapper>
        </InputContainer>
        <FilterContainer></FilterContainer>
        <ItemContainer>
          <Flex>
            {dummyData.map((el) => (
              <Item key={el.id} {...el} />
            ))}
          </Flex>
        </ItemContainer>
        <FooterContainer>
          <Space height={"15px"} />
          <Flex align="end">
            <WriteBtn onClick={() => navigate("/lost/add")}>
              <Text
                cursor="pointer"
                size={12}
                weight={700}
                color={palette.color_beige}
                onClick={() => navigate("/lost/add")}
              >
                글쓰기
              </Text>
            </WriteBtn>
          </Flex>
          <Space height={"5px"} />
          <Flex direction="row" width="auto" gap={20}>
            <PaginationBtn src={left} alt="leftPage" />
            <Flex width="auto" direction="row">
              <Text cursor="pointer" size={12} color={palette.color_wine}>
                1&nbsp;
              </Text>
              <Text size={12}>/&nbsp;</Text>
              <Text size={12}>5</Text>
            </Flex>
            <PaginationBtn src={right} alt="rightPage" />
          </Flex>
        </FooterContainer>
      </Flex>
    </Flex>
  );
};

const PaginationBtn = styled.img`
  width: 4px;
  height: 8px;
  cursor: pointer;
`;

const WriteBtn = styled.button`
  background-color: ${palette.color_wine};
  border: none;
  padding: 7px 20px 5px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const FooterContainer = styled.div`
  width: 100%;
`;

const ItemContainer = styled.div`
  height: 400px;
`;

const FilterContainer = styled.div`
  width: 100%;
`;

const TopSwitchWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  padding-top: 8px;
  border: none;
  height: auto;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 0px 18px;
`;

const InputWrapper = styled.div`
  border-radius: 5px;
  padding: 6px 10px 7px 10px;
  border: 0.5px solid ${palette.color_subText};
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
  }
`;

const StlyedBoard = styled.div`
  padding: 0px 3px 12px 3px;
  border-bottom: ${({ isClicked }) =>
    isClicked ? `3px solid ${palette.color_wine}` : "3px solid transparent"};
  cursor: pointer;
`;

export default Lost;
