import styled from "@emotion/styled";

interface InputOptionButtonProps {
  onClick: () => void;
}

const InputOptionButton: React.FC<InputOptionButtonProps> = (props) => {
  const { onClick, children } = props;
  return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
};

const ButtonBox = styled.button`
  width: 65px;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.size.sm};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default InputOptionButton;
