import card from "@assets/card.svg";
import phone from "@assets/phone.svg";
import cosmetic from "@assets/cosmetic.svg";
import wallet from "@assets/wallet.svg";
import etc from "@assets/etc.svg";
import cloth from "@assets/cloth.svg";
import pattern from "@assets/pattern.svg";

export const mapData = [
  {
    name: "J관",
    id: "j",
    coord: {
      x: 272,
      y: 49,
    },
  },
  {
    name: "R관",
    id: "r",
    coord: {
      x: 246,
      y: 98,
    },
  },
  {
    name: "K관",
    id: "k",
    coord: {
      x: 205,
      y: 125,
    },
  },

  {
    name: "GA관",
    id: "ga",
    coord: {
      x: 80,
      y: 80,
    },
  },
  {
    name: "MA관",
    id: "ma",
    coord: {
      x: 60,
      y: 55,
    },
  },
  {
    name: "AS관",
    id: "as",
    coord: {
      x: 252,
      y: 76,
    },
  },
  {
    name: "D관",
    id: "d",
    coord: {
      x: 195,
      y: 18,
    },
  },
  {
    name: "체육관",
    id: "gym",
    coord: {
      x: 180,
      y: 150,
    },
  },

  {
    name: "우정원",
    id: "bw",
    coord: {
      x: 139,
      y: 135,
    },
  },
  {
    name: "청년광장",
    id: "square",
    coord: {
      x: 110,
      y: 100,
    },
  },
  {
    name: "대운동장",
    id: "play",
    coord: {
      x: 210,
      y: 80,
    },
  },
  {
    name: "엠마오관",
    id: "e",
    coord: {
      x: 175,
      y: 73,
    },
  },
  {
    name: "로욜라도서관",
    id: "loyola",
    coord: {
      x: 183,
      y: 46,
    },
  },
  {
    name: "곤자가플라자",
    id: "plaza",
    coord: {
      x: 233,
      y: 50,
    },
  },
  {
    name: "GN관",
    id: "gn",
    coord: {
      x: 175,
      y: 115,
    },
  },
];

export const productData = [
  {
    id: 1,
    name: "전자기기",
    unique: "electricity",
    src: phone,
  },
  {
    id: 2,
    name: "지갑",
    unique: "wallet",
    src: wallet,
  },
  {
    id: 3,
    name: "화장품",
    unique: "cosmetic",
    src: cosmetic,
  },
  {
    id: 4,
    name: "의류/액세서리",
    unique: "cloth",
    src: cloth,
  },
  {
    id: 5,
    name: "카드/신분증",
    unique: "card",
    src: card,
  },
  {
    id: 6,
    name: "기타",
    unique: "etc",
    src: etc,
  },
];

export const colorData = [
  {
    name: "레드",
    id: "red",
    color: "#EC1E31",
  },
  {
    name: "오렌지",
    id: "orange",
    color: "#F26429",
  },
  {
    name: "옐로우",
    id: "yellow",
    color: "#FDB716",
  },
  {
    name: "그린",
    id: "green",
    color: "#1CAF4D",
  },
  {
    name: "블루",
    id: "blue",
    color: "#1D6ECD",
  },
  {
    name: "네이비",
    id: "navy",
    color: "#1D4F89",
  },
  {
    name: "퍼플",
    id: "purple",
    color: "#865CBB",
  },
  {
    name: "핑크",
    id: "pink",
    color: "#F16EA7",
  },
  {
    name: "화이트",
    id: "white",
    color: "#ffffff",
  },
  {
    name: "블랙",
    id: "black",
    color: "#000000",
  },
  {
    name: "골드",
    id: "gold",
    color:
      "linear-gradient(0deg, rgba(254, 206, 97, 0.20) 0%, rgba(254, 206, 97, 0.20) 100%), conic-gradient(from 180deg at 48.5% 50%, #E3A455 26.24999910593033deg, #F6DBA6 88.12500178813934deg, #FFEBC3 156.58468008041382deg, #F0BE79 191.74442768096924deg, #8F653B 213.59200716018677deg, #673D22 225.95467329025269deg, #BA7F3B 255.19062280654907deg, #EEBC70 278.6032176017761deg, #976349 331.875deg)",
  },
  {
    name: "실버",
    id: "silver",
    color:
      "conic-gradient(from 180deg at 48.5% 50%, #FBFBFD 26.24999910593033deg, #C8D4DA 88.12500178813934deg, #FFF 156.58468008041382deg, #AEC0CE 191.74442768096924deg, #E3E9EE 237.1290135383606deg, #FAFBFC 255.19062280654907deg, #D6DFE6 310.1085305213928deg, #B8C9D3 331.875deg)",
  },
  {
    name: "브라운",
    id: "brown",
    color: "#712014",
  },
  {
    name: "베이지",
    id: "beige",
    color: "#E3D6AB",
  },
  {
    name: "패턴",
    id: "pattern",
    src: pattern,
  },
  {
    name: "기타",
    id: "etc",
    src: etc,
  },
];
