import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface SmallTextProps {
  style?: CSSProperties;
  onClick?: () => void;
}

const SmallText: React.FC<SmallTextProps> = ({ children, style, onClick }) => {
  return (
    <StyledH4 style={style} onClick={onClick}>
      {children}
    </StyledH4>
  );
};

const StyledH4 = styled.h4`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.size.sm};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

export default SmallText;
