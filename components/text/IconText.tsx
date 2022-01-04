import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface IconTextProps {
  style?: CSSProperties;
}

const IconText: React.FC<IconTextProps> = ({ children, style }) => {
  return <StyledH1 style={style}>{children}</StyledH1>;
};

const StyledH1 = styled.h1`
  background: ${({ theme }) =>
    `linear-gradient(to right,${theme.color.purple},${theme.color.pink})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 42px;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export default IconText;
