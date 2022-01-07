import { Wrapper, TopNavigation, Button } from "../../components/common";
import { useRouter } from "next/router";
import { MiddleText, BigText } from "../../components/text";

const Sex = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>이름</TopNavigation>

      <BigText>성별</BigText>
      <MiddleText>을 선택하세요</MiddleText>
      <Button enable={true} onclick={() => router.push("/auth/birthday")}>
        다음
      </Button>
    </Wrapper>
  );
};

export default Sex;
