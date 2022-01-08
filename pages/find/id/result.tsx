import { Button, TopNavigation, Wrapper } from "../../../components/common";
import { BigText, MiddleText } from "../../../components/text";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
const Result = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>인증번호</TopNavigation>
      <BigText>아이디 찾기</BigText>
      <MiddleText>아이디를 확인해주세요.</MiddleText>
      <Button enable={true} onclick={() => router.push("/auth/main")}>
        완료
      </Button>
    </Wrapper>
  );
};

const ResultBox = styled.div``;

export default Result;
