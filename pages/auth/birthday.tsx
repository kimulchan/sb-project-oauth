import styled from "@emotion/styled";
import { SmallText, MiddleText, BigText } from "../../components/text";
import { Wrapper, TopNavigation, Button } from "../../components/common";
import { useRouter } from "next/router";

const Birthday = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>성별</TopNavigation>
      <BigText>생일</BigText>
      <MiddleText>을 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>생년월일을 선택하세요</SmallText>
      <Button enable={true} onclick={() => router.push("/auth/phonenum")}>
        다음
      </Button>
    </Wrapper>
  );
};

export default Birthday;
