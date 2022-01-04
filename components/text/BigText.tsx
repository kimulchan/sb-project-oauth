import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface BigTextProps {
  style?: CSSProperties;
}

const BigText: React.FC<BigTextProps> = ({ children, style }) => {
  return <StyledH2 style={style}>{children}</StyledH2>;
};

const StyledH2 = styled.h2`
  background: ${({ theme }) =>
    `linear-gradient(to right,${theme.color.purple},${theme.color.pink})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ theme }) => theme.size.lg};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export default BigText;
