import React from "react";
import ItemBox from "./component/ItemBox";
import Header from "@components/organisms/Header";
import Flex from "@components/atoms/Flex";
import { palette } from "@styles/palette";
import { Text } from "@components/atoms/Text";
const Food = () => {
  return (
    <Flex>
      <Header />
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Text size={14} weight={700} color={palette.color_mainText}>
                  곱창좋은날ㆍ곱창
                </Text>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;기본</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    13,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;중</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    18,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;기본</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Text size={14} weight={700} color={palette.color_mainText}>
                  고피자ㆍ피자
                </Text>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;아메리칸 치즈 피자</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    10,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;오리지널 페퍼로니 피자</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;미스터블랙ㆍ흑돼지덮밥</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;그레잇ㆍ크레페</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;비포ㆍ커피&칵테일&음료</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Text size={14} weight={700} color={palette.color_mainText}>
                  체리블라썸
                </Text>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;타코야끼</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    6,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;소떡소떡</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;블랙래빗ㆍ닭강정</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;스낵런ㆍ탕후루</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={13} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;월드푸드ㆍ츄러스&회오리감자</div>
                  </Text>
                  <Text size={13} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Text size={14} weight={700} color={palette.color_mainText}>
                  무빙스낵ㆍ분식
                </Text>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;떡볶이</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    5,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;순대</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    5,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;튀김</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;흔남스시ㆍ불초밥</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;짱츄닭ㆍ수제닭꼬치</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Text size={14} weight={700} color={palette.color_mainText}>
                  블랙스테이크ㆍ스테이크
                </Text>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;싱글</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    10,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;더블</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    15,0
                  </Text>
                </Flex>
              </Flex>
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={400} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;덮밥</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;탑클래스ㆍ케밥&소시지</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
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
              <Flex width="100%" height="100%" direction="row" justify="start">
                <Flex justify="space-between" direction="row">
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    <div>&nbsp;&nbsp;에이치키친ㆍ야끼소바</div>
                  </Text>
                  <Text size={14} weight={700} color={palette.color_mainText}>
                    10.0
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ItemBox>
      </Flex>
    </Flex>
  );
};

export default Food;
