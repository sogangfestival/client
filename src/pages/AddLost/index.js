import Flex from "@components/atoms/Flex";
import { Text } from "@components/atoms/Text";
import Back from "@components/molecules/Back";
import { palette } from "@styles/palette";
import React, { useState } from "react";
import { styled } from "styled-components";
import camera from "@assets/camera.svg";
import { Space } from "@components/atoms/Space";
import up from "@assets/upToggle.svg";
import down from "@assets/downToggle.svg";

const AddLost = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [search, setSearch] = useState(undefined);
  const [toggle, setToggle] = useState({
    location: false,
    product: false,
    color: false,
  });

  const changeToggle = (type) => {
    setToggle({ ...toggle, [type]: !toggle[type] });
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Flex>
      <AddTop>
        <Flex gap={99} direction="row" justify="space-between">
          <Back />
          <Text size={18} weight={700}>
            글쓰기
          </Text>
          <Text
            cursor="pointer"
            size={16}
            weight={500}
            color={palette.color_subText}
          >
            완료
          </Text>
        </Flex>
      </AddTop>
      <AddBody>
        <Space height={"12px"} />
        <Flex align="start">
          <Flex justify="start" direction="row" gap={5}>
            <UploadContainer>
              <div style={{ position: "relative" }}>
                <Flex>
                  <label
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      position: "absolute",
                      height: "100%",
                    }}
                    htmlFor="imageInput"
                    className="upload-button"
                  ></label>
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    onChange={handleImageSelect}
                    style={{ display: "none" }}
                  />
                  <img
                    alt="uploadImg"
                    src={camera}
                    width={"57px"}
                    height={"43px"}
                    style={{ cursor: "pointer" }}
                  />
                  <Text cursor="pointer" color={palette.color_icon} size={12}>
                    클릭해서 업로드
                  </Text>
                </Flex>
              </div>
            </UploadContainer>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="선택한 이미지"
                width={"87px"}
                height={"87px"}
              />
            ) : (
              ""
            )}
          </Flex>
          <Space height={"21px"} />
          <WriteSpace>
            <TitleInput
              placeholder={"제목을 입력하세요"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Space height={"16px"} />
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: palette.color_line,
              }}
            ></div>
          </WriteSpace>
          <Space height={"20px"} />
          <FilterSpace>
            <Flex align="start" gap={20}>
              <Flex direction="row" width="auto" justify="start" gap={9}>
                <Text
                  cursor="pointer"
                  size={12}
                  weight={500}
                  color={palette.color_subText}
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
              <Flex direction="row" width="auto" justify="start" gap={9}>
                <Text
                  cursor="pointer"
                  size={12}
                  weight={500}
                  color={palette.color_subText}
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
              <Flex direction="row" width="auto" justify="start" gap={9}>
                <Text
                  cursor="pointer"
                  size={12}
                  weight={500}
                  color={palette.color_subText}
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
            </Flex>
          </FilterSpace>
          <Space height={"20px"} />
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: palette.color_line,
            }}
          ></div>
          <Space height={"20px"} />
          <ContentSpace>
            <ContentArea placeholder="내용을 입력해주세요" />
          </ContentSpace>
        </Flex>
      </AddBody>
    </Flex>
  );
};

const ContentSpace = styled.div`
  width: 100%;
`;

const FilterSpace = styled.div``;

const WriteSpace = styled.div`
  width: 100%;
`;

const AddTop = styled.div`
  width: 100%;
  padding: 55px 18px 25px 18px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
`;

const AddBody = styled.div`
  width: 100%;
  padding: 18px;
`;

const UploadContainer = styled.div`
  padding: 19px 15px 11px 15px;
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;

const TitleInput = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;
  font-family: Noto Sans KR;
  font-weight: 700;
  color: ${palette.color_mainText};
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    font-family: Noto Sans KR;
    font-weight: 700;
    color: ${palette.color_icon};
  }
`;

const ContentArea = styled.textarea`
  border: none;
  width: 100%;
  font-size: 14px;
  font-family: Noto Sans KR;
  font-weight: 500;
  height: 200px;
  resize: none;
  color: ${palette.color_mainText};
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    font-family: Noto Sans KR;
    font-weight: 500;
    color: ${palette.color_icon};
  }
`;

export default AddLost;
