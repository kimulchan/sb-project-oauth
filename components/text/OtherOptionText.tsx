import { CSSProperties } from "react";
import styled from "@emotion/styled";

interface OtherOptionTextProps {
  style?: CSSProperties;
  actionText: string;
  actionTextOnClick: () => void;
}

const OtherOptionText: React.FC<OtherOptionTextProps> = ({
  style,
  actionText,
  actionTextOnClick,
  children,
}) => {
  return (
    <TextWrapper style={style}>
      {children}
      <p onClick={actionTextOnClick}>{actionText}</p>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.size.sm};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.gray};
  > p {
    color: ${({ theme }) => theme.color.blue};
  }
`;

export default OtherOptionText;
