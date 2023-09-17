import styled from "styled-components";
const ItemBox = ({
  height,
  width,
  direction,
  justify,
  align,
  background,
  children,
}) => {
  return (
    <Box
      height={height}
      direction={direction}
      justify={justify}
      align={align}
      background={background}
      width={width}
    >
      {children}
    </Box>
  );
};

export default ItemBox;

const Box = styled.div`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  background-color: ${({ background }) => background};
  border-radius: 10px;
`;
