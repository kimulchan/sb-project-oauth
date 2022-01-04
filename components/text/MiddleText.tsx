import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface MiddleTextProps {
  style?: CSSProperties;
}

const MiddleText: React.FC<MiddleTextProps> = ({ children, style }) => {
  return <StyledH3 style={style}>{children}</StyledH3>;
};

const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.size.md};
  font-weight: ${({ theme }) => theme.weight.medium};
`;
export default MiddleText;
