import React from "react";
import left from "@assets/leftPage.svg";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <>
      <object
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer", width: "11px", height: "18px" }}
        data={left}
        type="image/svg+xml"
      />
    </>
  );
};

export default Back;
