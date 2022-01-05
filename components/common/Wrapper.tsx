import styled from "@emotion/styled";
import { CSSProperties } from "react";

interface WrapperProps {
  style?: CSSProperties;
}

const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
  return <BasicWrapper style={style}>{children}</BasicWrapper>;
};

const BasicWrapper = styled.div`
  margin: 0 40px;
  margin-top: 148px;
  display: flex;
  height: 80%;
  align-items: center;
  flex-direction: column;
`;

export default Wrapper;
