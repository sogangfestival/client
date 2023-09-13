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
