import styled from "@emotion/styled";
import {
  SmallText,
  MiddleText,
  BigText,
  OtherOptionText,
} from "../../components/text";
import { Input, Wrapper, TopNavigation, Button } from "../../components/common";
import { useRouter } from "next/router";
import InputOptionButton from "../../components/decoration/InputOptionButton";

const PhoneNum = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <TopNavigation>생일</TopNavigation>
      <BigText>휴대폰 번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>
        실제로 사용하고 있는 번호를 입력해주세요.
      </SmallText>
      <InputWrapper>
        <Input placeholder="휴대폰 번호">
          <InputOptionButton onClick={() => {}}>인증 요청</InputOptionButton>
        </Input>
        <Input
          placeholder="인증번호"
          isError={true}
          errorMessage="인증번호가 일치하지 않습니다"
        >
          <InputOptionButton onClick={() => {}}>확인</InputOptionButton>
        </Input>
      </InputWrapper>

      <Button enable={true} onclick={() => router.push("/auth/password")}>
        다음
      </Button>
      <OtherOptionText actionText="새 인증받기" actionTextOnClick={() => {}}>
        인증번호가 오지 않았나요?
      </OtherOptionText>
    </Wrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin: 45px 0;
`;

export default PhoneNum;
