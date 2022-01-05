import styled from "@emotion/styled";
import Image from "next/image";
interface CheckBoxProps {
  isAction: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { isAction } = props;
  return (
    <CheckBoxWrapper isAction={isAction}>
      <Image
        width={15}
        height={15}
        alt="check"
        src="/images/check.svg"
        priority
      />
    </CheckBoxWrapper>
  );
};

const CheckBoxWrapper = styled.div<{ isAction: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 1.5px;
  color: ${({ theme }) => theme.color.white};
  ${({ isAction }) => (isAction ? "" : "filter: opacity(0.5)")};
`;

export default CheckBox;
