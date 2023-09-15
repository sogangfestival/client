import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import { styled } from "styled-components";
import { palette } from "@styles/palette";
import { useEffect, useState } from "react";
import { Space } from "@components/atoms/Space";
import SearchImg from "@assets/search.svg";
import Item from "./components/Item";
import left from "@assets/leftPage.svg";
import right from "@assets/rightPage.svg";
import Header from "@components/organisms/Header";
import { useNavigate } from "react-router-dom";
import up from "@assets/upToggle.svg";
import down from "@assets/downToggle.svg";
import Map from "./components/Map";
import Product from "./components/Product";
import FilterColor from "./components/FilterColor";
import Spinner from "@components/organisms/Spinner";
import Service from "services/sgFestival";

const Lost = () => {
  // 상단 탭 스위칭 용 state
  const [isClicked, setIsClicked] = useState("lost");
  // 검색어
  const [search, setSearch] = useState(undefined);
  // 필터 토글 유무
  const [toggle, setToggle] = useState({
    location: false,
    product: false,
    color: false,
  });
  // 필터 자체 값에 대한 state
  const [toggleValue, setToggleValue] = useState({
    location: "",
    product: "",
    color: "",
  });

  const isSuperVisor = () => {
    const userInput = prompt(
      "해당 기능은 총학에서만 관리합니다. 비밀번호를 입력해주세요:"
    );
    if (userInput === process.env.REACT_APP_FOUND_PW) {
      navigate("/lost/add?flag=no");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const changeToggleValue = (type, value) => {
    setToggleValue({ ...toggleValue, [type]: value });
  };

  // 받아온 분실물 데이터
  const [lostData, setData] = useState([]);
  const [page, setPage] = useState(1);

  const changePage = (direction) => {
    if (direction === "left") {
      if (!lostData.previous) {
        alert("첫번째 페이지입니다");
      } else {
        setPage(page - 1);
      }
    } else if (direction === "right") {
      if (!lostData.next) {
        alert("마지막 페이지입니다");
      } else {
        setPage(page + 1);
      }
    }
  };

  const getLostData = async (isPage = false) => {
    let data;
    let place = toggleValue?.location?.split(" ")[1];
    let color = toggleValue?.color?.split(" ")[1];
    let type = toggleValue.product?.split(" ")[1];
    let keyword = search;
    let realPage = isPage ? 1 : page;

    try {
      if (isClicked === "lost") {
        data = await Service.getLostPost({
          page: realPage,
          color,
          type,
          keyword,
          place,
        });
      } else if (isClicked === "acquis") {
        data = await Service.getFoundPost({
          page: realPage,
          color,
          type,
          keyword,
          place,
        });
      }
      console.log(data);
      setData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLostData();
  }, [isClicked, page]);

  const navigate = useNavigate();
  const changeToggle = (type) => {
    const newData = {
      location: false,
      product: false,
      color: false,
    };
    setToggle({ ...newData, [type]: !toggle[type] });
  };
  const switchTab = (id) => {
    setIsClicked(id);
    setSearch("");
  };

  useEffect(() => {
    const newData = {
      location: false,
      product: false,
      color: false,
    };
    setToggle(newData);
  }, [toggleValue]);

  useEffect(() => {
    setToggleValue({
      location: undefined,
      product: undefined,
      color: undefined,
    });
    setSearch(undefined);
    setToggle({
      location: false,
      product: false,
      color: false,
    });
  }, [isClicked]);

  return (
    <Flex>
      {/* 데이터가 들어오지 않을 때  */}
      {lostData ? "" : <Spinner />}
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
                onClick={() => switchTab("acquis")}
                isClicked={isClicked === "acquis"}
              >
                <Text
                  size={12}
                  cursor="pointer"
                  color={isClicked === "acquis" ? palette.color_wine : "black"}
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
              <img
                src={SearchImg}
                alt="search"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  getLostData(true);
                  setPage(1);
                }}
              />
            </Flex>
          </InputWrapper>
        </InputContainer>
        <Space height={"20px"} />
        <FilterSpace>
          <Flex direction="row" justify="start" gap={18} height="21px">
            {toggleValue.location ? (
              <SelectedFilter
                onClick={() => changeToggleValue("location", undefined)}
              >
                <Flex direction="row" justify="start" gap={7}>
                  <Text cursor="pointer" color={palette.color_white}>
                    {toggleValue?.location?.split(" ")[0]}
                  </Text>
                  <Text cursor="pointer" color={palette.color_white}>
                    X
                  </Text>
                </Flex>
              </SelectedFilter>
            ) : (
              <Flex direction="row" width="auto" justify="start" gap={5}>
                <Text
                  cursor="pointer"
                  size={10}
                  weight={500}
                  color={
                    toggle.location
                      ? palette.color_wine
                      : palette.color_mainText
                  }
                  onClick={() => changeToggle("location")}
                >
                  분실위치
                </Text>
                <img
                  style={{ cursor: "pointer" }}
                  src={toggle.location ? up : down}
                  alt="toggle"
                  onClick={() => changeToggle("location")}
                />
              </Flex>
            )}

            {toggleValue.product?.split(" ")[0] ? (
              <SelectedFilter
                onClick={() => changeToggleValue("product", undefined)}
              >
                <Flex direction="row" justify="start" gap={7}>
                  <Text cursor="pointer" color={palette.color_white}>
                    {toggleValue.product?.split(" ")[0]}
                  </Text>
                  <Text cursor="pointer" color={palette.color_white}>
                    X
                  </Text>
                </Flex>
              </SelectedFilter>
            ) : (
              <Flex direction="row" width="auto" justify="start" gap={5}>
                <Text
                  cursor="pointer"
                  size={10}
                  weight={500}
                  color={
                    toggle.product ? palette.color_wine : palette.color_mainText
                  }
                  onClick={() => changeToggle("product")}
                >
                  분실 제품
                </Text>
                <img
                  style={{ cursor: "pointer" }}
                  src={toggle.product ? up : down}
                  alt="toggle"
                  onClick={() => changeToggle("product")}
                />
              </Flex>
            )}
            {toggleValue?.color?.split(" ")[0] ? (
              <SelectedFilter
                onClick={() => changeToggleValue("color", undefined)}
              >
                <Flex direction="row" justify="start" gap={7}>
                  <Text cursor="pointer" color={palette.color_white}>
                    {toggleValue?.color?.split(" ")[0]}
                  </Text>
                  <Text cursor="pointer" color={palette.color_white}>
                    X
                  </Text>
                </Flex>
              </SelectedFilter>
            ) : (
              <Flex direction="row" width="auto" justify="start" gap={5}>
                <Text
                  cursor="pointer"
                  size={10}
                  weight={500}
                  color={
                    toggle.color ? palette.color_wine : palette.color_mainText
                  }
                  onClick={() => changeToggle("color")}
                >
                  색상
                </Text>
                <img
                  style={{ cursor: "pointer" }}
                  src={toggle.color ? up : down}
                  alt="toggle"
                  onClick={() => changeToggle("color")}
                />
              </Flex>
            )}
          </Flex>
          <Space height={"10px"} />
        </FilterSpace>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: palette.color_icon,
          }}
        ></div>
        <ItemContainer>
          {toggle.location ? (
            <Map click={toggleValue.location} onClick={changeToggleValue} />
          ) : (
            ""
          )}
          {toggle.product ? <Product onClick={changeToggleValue} /> : ""}
          {toggle.color ? <FilterColor onClick={changeToggleValue} /> : ""}
          <Flex>
            {lostData?.results?.map((el) => (
              <Item key={el.id} {...el} />
            ))}
          </Flex>
        </ItemContainer>
        <FooterContainer>
          <Space height={"15px"} />
          <Flex align="end">
            <WriteBtn
              onClick={
                isClicked === "lost"
                  ? () => navigate("/lost/add")
                  : () => isSuperVisor()
              }
            >
              <Text
                cursor="pointer"
                size={12}
                weight={700}
                color={palette.color_beige}
                onClick={
                  isClicked === "lost"
                    ? () => navigate("/lost/add")
                    : () => isSuperVisor()
                }
              >
                글쓰기
              </Text>
            </WriteBtn>
          </Flex>
          <Space height={"5px"} />
          <Flex direction="row" width="auto" gap={20}>
            <PaginationBtn
              src={left}
              alt="leftPage"
              onClick={() => changePage("left")}
            />
            <Flex width="auto" direction="row">
              <Text cursor="pointer" size={12} color={palette.color_wine}>
                {page}&nbsp;
              </Text>
              <Text size={12}>/&nbsp;</Text>
              <Text size={12}>
                {lostData.count ? Math.ceil(lostData.count / 4) : 1}
              </Text>
            </Flex>
            <PaginationBtn
              src={right}
              alt="rightPage"
              onClick={() => changePage("right")}
            />
          </Flex>
        </FooterContainer>
      </Flex>
    </Flex>
  );
};

const SelectedFilter = styled.div`
  cursor: pointer;
  background-color: ${palette.color_wine};
  border-radius: 3px;
  padding: 4px 7px 5px 7px;
`;

const FilterSpace = styled.div`
  width: 100%;
  padding: 0px 18px;
  height: 30px;
`;

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
  width: 100%;
  position: relative;
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
