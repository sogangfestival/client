import React from "react";
import left from "@assets/leftPage.svg";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
        src={left}
        width={"11px"}
        height={"18px"}
        alt="back"
      />
    </>
  );
};

export default Back;
