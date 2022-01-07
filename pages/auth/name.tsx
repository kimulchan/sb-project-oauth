import { Input, Wrapper, TopNavigation, Button } from "../../components/common";
import { SmallText, MiddleText, BigText } from "../../components/text";
import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation onClick={() => router.push("/auth/main")}>
        메인
      </TopNavigation>
      <BigText>이름</BigText>
      <MiddleText>을 입력하세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>실명을 입력하세요</SmallText>
      <Input placeholder="Name" style={{ margin: "55px 0" }}></Input>
      <Button
        enable={true}
        onclick={() => {
          router.push("/auth/sex");
        }}
      >
        다음
      </Button>
    </Wrapper>
  );
};

export default Name;
