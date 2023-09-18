import React from "react";
import left from "@assets/leftPage.png";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <>
      <img
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer", width: "11px", height: "18px" }}
        src={left}
      />
    </>
  );
};

export default Back;
