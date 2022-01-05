import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface ButtonProps {
  enable: boolean;
  onclick: () => void;
  style?: CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { enable, onclick, children, style } = props;
  return (
    <ButtonWrapper
      style={style}
      enable={enable}
      onClick={() => !enable || onclick()}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ enable: boolean }>`
  height: 40px;
  width: 100%;
  background: ${({ theme }) =>
    `linear-gradient(to right,${theme.color.purple},${theme.color.pink})`};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.sm};
  border-radius: 20px;
  ${({ enable }) => (enable ? "" : `filter: opacity(0.5);`)}
`;

export default Button;
