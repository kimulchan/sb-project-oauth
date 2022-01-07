import { Input, Wrapper, TopNavigation, Button } from "../../components/common";
import { SmallText, MiddleText, BigText } from "../../components/text";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Password = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>휴대폰 번호</TopNavigation>
      <BigText>비밀번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>
        실제로 사용하고 있는 번호를 입력헤주세요
      </SmallText>
      <InputWrapper>
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인" />
      </InputWrapper>
      <Button enable={true} onclick={() => router.push("/auth/email")}>
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

export default Password;
