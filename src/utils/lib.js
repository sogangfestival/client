export const calculateTime = (time) => {
  const curTime = new Date().getTime();
  const postedTime = new Date(time).getTime();
  const timeDiff = Number((curTime - postedTime) / 1000 / 60);

  if (timeDiff < 1) {
    return "방금";
  } else if (timeDiff >= 1 && timeDiff <= 59) {
    return `${Math.floor(timeDiff)}분 전`;
  } else if (timeDiff >= 60 && timeDiff <= 1439) {
    return `${Math.floor(timeDiff / 60)}시간 전`;
  } else {
    const hi = new Date(time).toLocaleDateString().split(".");
    return `${hi[1].trim().padStart(2, 0)}/${hi[2].trim().padStart(2, 0)}`;
  }
};
