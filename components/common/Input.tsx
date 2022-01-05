import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { ErrorText } from "../text";

interface InputProps {
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
  style?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  children,
  style,
  isError = false,
  errorMessage,
}) => {
  return (
    <InputWrapper>
      <StyledInput placeholder={placeholder} style={style} maxLength={26} />
      <OptionalIcon>{children}</OptionalIcon>
      {isError && (
        <ErrorText style={{ position: "absolute", bottom: "-17px", right: 0 }}>
          {errorMessage}
        </ErrorText>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.size.sm};
  padding: 8px;
`;

const OptionalIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 5px;
`;
export default Input;
