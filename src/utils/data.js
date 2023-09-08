import card from "@assets/card.svg";
import phone from "@assets/phone.svg";
import cosmetic from "@assets/cosmetic.svg";
import wallet from "@assets/wallet.svg";
import etc from "@assets/etc.svg";
import cloth from "@assets/cloth.svg";
import pattern from "@assets/pattern.svg";

export const mapData = [
  "J관",
  "R관",
  "K관",
  "GA관",
  "MA관",
  "AS관",
  "다산관",
  "체육관",
  "경제관",
  "우정원",
  "청년광장",
  "대운동장",
  "엠마오관",
  "로욜라 도서관",
  "곤자가 플라자",
  "잘 모르겠음",
];

export const productData = [
  {
    id: 1,
    name: "전자기기",
    src: phone,
  },
  {
    id: 2,
    name: "지갑",
    src: wallet,
  },
  {
    id: 3,
    name: "화장품",
    src: cosmetic,
  },
  {
    id: 4,
    name: "의류/액세서리",
    src: cloth,
  },
  {
    id: 5,
    name: "카드/신분증",
    src: card,
  },
  {
    id: 6,
    name: "기타",
    src: etc,
  },
];

export const colorData = [
  {
    name: "레드",
    color: "#EC1E31",
  },
  {
    name: "오렌지",
    color: "#F26429",
  },
  {
    name: "옐로우",
    color: "#FDB716",
  },
  {
    name: "그린",
    color: "#1CAF4D",
  },
  {
    name: "블루",
    color: "#1D6ECD",
  },
  {
    name: "네이비",
    color: "#1D4F89",
  },
  {
    name: "퍼플",
    color: "#865CBB",
  },
  {
    name: "핑크",
    color: "#F16EA7",
  },
  {
    name: "화이트",
    color: "#ffffff",
  },
  {
    name: "블랙",
    color: "#000000",
  },
  {
    name: "골드",
    color:
      "linear-gradient(0deg, rgba(254, 206, 97, 0.20) 0%, rgba(254, 206, 97, 0.20) 100%), conic-gradient(from 180deg at 48.5% 50%, #E3A455 26.24999910593033deg, #F6DBA6 88.12500178813934deg, #FFEBC3 156.58468008041382deg, #F0BE79 191.74442768096924deg, #8F653B 213.59200716018677deg, #673D22 225.95467329025269deg, #BA7F3B 255.19062280654907deg, #EEBC70 278.6032176017761deg, #976349 331.875deg)",
  },
  {
    name: "실버",
    color:
      "conic-gradient(from 180deg at 48.5% 50%, #FBFBFD 26.24999910593033deg, #C8D4DA 88.12500178813934deg, #FFF 156.58468008041382deg, #AEC0CE 191.74442768096924deg, #E3E9EE 237.1290135383606deg, #FAFBFC 255.19062280654907deg, #D6DFE6 310.1085305213928deg, #B8C9D3 331.875deg)",
  },
  {
    name: "브라운",
    color: "#712014",
  },
  {
    name: "베이지",
    color: "#E3D6AB",
  },
  {
    name: "패턴",
    src: pattern,
  },
  {
    name: "기타",
    src: etc,
  },
];
