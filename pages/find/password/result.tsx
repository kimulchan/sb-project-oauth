import styled from "@emotion/styled";
import {
  Button,
  Input,
  TopNavigation,
  Wrapper,
} from "../../../components/common";
import { BigText, MiddleText, SmallText } from "../../../components/text";
import { useRouter } from "next/router";
const Result = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>인증번호</TopNavigation>
      <BigText>변경할 비밀번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallTextWrapper>
        <SmallText>8자 이상 32자 이하</SmallText>
        <SmallText>(영어 소문자, 숫자, 특수문자 하나 이상 포함)</SmallText>
      </SmallTextWrapper>
      <InputWrapper>
        <Input placeholder="비밀번호"></Input>
        <Input placeholder="비밀번호 확인"></Input>
      </InputWrapper>
      <Button enable={true} onclick={() => router.push("/auth/main")}>
        완료
      </Button>
    </Wrapper>
  );
};

const SmallTextWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 40px;
  margin: 50px 0;
`;

export default Result;
