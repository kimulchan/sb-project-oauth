import { CSSProperties } from "react";
import styled from "@emotion/styled";

interface ErrorTextProps {
  style?: CSSProperties;
}

const ErrorText: React.FC<ErrorTextProps> = (props) => {
  const { style, children } = props;

  return <ErrorString style={style}>{children}</ErrorString>;
};

const ErrorString = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.size.sm};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export default ErrorText;
