import Flex from "@components/atoms/Flex";
import { Space } from "@components/atoms/Space";
import { Text } from "@components/atoms/Text";
import { palette } from "@styles/palette";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lock from "@assets/lock.svg";

const Modal = ({ setPwd, requestPost }) => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const [isPosted, setIsPosted] = useState(false);
  const regex = /^\d{6,}$/;
  const [second, setSecond] = useState(3);

  const checkIsValidPW = (value) => {
    if (regex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setPassword(value);
    setPwd(value);
  };

  useEffect(() => {
    if (isPosted) {
      const timer = setInterval(() => {
        setSecond(parseInt(second) - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPosted, second]);

  const postRequest = () => {
    requestPost();
  };

  return (
    <ModalContainer>
      <Flex height="100%">
        {isPosted ? (
          <PasswordWrapper>
            <Flex>
              <object data={lock} type="image/svg+xml" />
              <Text size={14} weight={700}>
                작성자 인증 비밀번호 설정 완료!
              </Text>
              <Space height={"3px"} />
              <Text size={12} weight={500}>
                {`(PW : ${password})`}
              </Text>
              <Space height={"6px"} />
              <Text>{second}초 후 자동이동됩니다.</Text>
              <Space height={"5px"} />
              <Text>댓글 작성시 설정한 비밀번호를 입력하면</Text>
              <Text>이름이 "작성자"로 표시됩니다</Text>
            </Flex>
          </PasswordWrapper>
        ) : (
          <PasswordWrapper>
            <Flex>
              <Text color={"black"} size={14} weight={700}>
                댓글 작성 인증 비밀번호를 설정하세요.
              </Text>
              <Space height={"5px"} />
              <Text>게시글 작성시 설정한 비밀번호를 입력하면</Text>
              <Text>이름이 "작성자"로 표시됩니다</Text>
              <Space height={"5px"} />
              <Text>댓글 작성시 동일한 비밀번호를 입력하면</Text>
              <Text>닉네임이 유지됩니다</Text>
              <Space height={"5px"} />
              <Text color={"black"} size={12} weight={500}>
                {`(숫자, 6자 이상)`}
              </Text>
              <Space height={"20px"} />
              <PasswordInput
                value={password}
                onChange={(e) => checkIsValidPW(e.target.value)}
              />
              <Space height={"10px"} />
              <Text
                cursor="pointer"
                onClick={
                  isValid
                    ? () => postRequest()
                    : () => alert("알맞은 비밀번호를 작성해주세요")
                }
                color={isValid ? palette.color_wine : palette.color_subText}
                size={14}
                weight={700}
              >
                확인
              </Text>
            </Flex>
          </PasswordWrapper>
        )}
      </Flex>
    </ModalContainer>
  );
};

const PasswordInput = styled.input`
  border: 1px solid #c1c1c1;
  border-radius: 3px;
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

const PasswordWrapper = styled.div`
  padding: 22px 18px 11px 18px;
  border-radius: 14px;
  border: 0.5px solid #c1c1c1;
`;

const ModalContainer = styled.div`
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.95);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
`;

export default Modal;
