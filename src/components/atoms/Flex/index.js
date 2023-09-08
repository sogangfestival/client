import styled from "styled-components";

const Flex = ({
  children,
  height = "auto",
  direction = "column",
  justify = "center",
  align = "center",
  gap = 0,
  width = "100%",
  wrap = "nowrap",
}) => {
  return (
    <FlexBase
      height={height}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      width={width}
      wrap={wrap}
    >
      {children}
    </FlexBase>
  );
};

const FlexBase = styled.div`
  display: flex;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: ${({ wrap }) => wrap};
`;

export default Flex;
