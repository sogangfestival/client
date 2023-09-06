import { palette } from "@styles/palette";
import React from "react";
import { styled } from "styled-components";

const Tag = ({
  children,
  padding = "4px 7px",
  bgColor = palette.color_beige,
  radius = "3px",
}) => {
  return (
    <StyledTag padding={padding} bgColor={bgColor} radius={radius}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  padding: ${({ padding }) => padding};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => radius};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Tag;
