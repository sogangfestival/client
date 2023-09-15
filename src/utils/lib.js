export const calculateTime = (time) => {
  const data = time.split(" ");

  if (data.length === 7) {
    return `${data[0]}일 전`;
  } else if (data.length === 5) {
    return `${data[0]}시간 전`;
  } else if (data.length === 3) {
    return `${data[0]}분 전`;
  } else {
    return `방금`;
  }
};

export const converter = {
  etc: "기타",
  pattern: "패턴",
  pink: "분홍",
  beige: "베이지",
  silver: "은색",
  gold: "금색",
  black: "검정색",
  white: "흰색",
  brown: "갈색",
  purple: "보라색",
  navy: "남색",
  blue: "파랑",
  green: "초록",
  yellow: "노랑",
  orange: "주황",
  red: "빨강",
  electricity: "전자기기",
  cosmetic: "화장품",
  wallet: "지갑",
  cloth: "의류",
  accessory: "액세서리",
  card: "카드/신분증",
  plaza: "곤자가플라자",
  loyola: "로욜라 도서관",
  e: "엠마오관",
  play: "대운동장",
  square: "청년광장",
  bw: "우정관",
  gn: "GN관",
  gy: "체육관",
  d: "D관",
  as: "AS관",
  ma: "MA관",
  ga: "GA관",
  k: "K관",
  r: "R관",
  j: "J관",
};
