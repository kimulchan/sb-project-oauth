import styled from "@emotion/styled";
import { SmallText, MiddleText, BigText } from "../../components/text";
import InputOptionButton from "../../components/decoration/InputOptionButton";
import { Input, Wrapper, TopNavigation, Button } from "../../components/common";
import { useRouter } from "next/router";

const Email = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>비밀번호</TopNavigation>
      <BigText>이메일</BigText>
      <MiddleText>을 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>실명을 입력해 주세요</SmallText>
      <InputWrapper>
        <Input placeholder="이메일">
          <InputOptionButton onClick={() => {}}>인증번호</InputOptionButton>
        </Input>
        <Input placeholder="인증번호">
          <InputOptionButton onClick={() => {}}>중복검사</InputOptionButton>
        </Input>
      </InputWrapper>
      <Button onclick={() => router.push("/auth/profileimg")} enable={true}>
        다음
      </Button>
    </Wrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin: 45px 0;
`;

export default Email;
