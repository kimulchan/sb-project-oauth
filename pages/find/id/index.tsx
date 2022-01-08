import {
  Button,
  Input,
  TopNavigation,
  Wrapper,
} from "../../../components/common";
import { BigText, MiddleText, SmallText } from "../../../components/text";
import { useRouter } from "next/router";
const FindId = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation onClick={() => router.push("/auth/main")}>
        메인
      </TopNavigation>
      <BigText>휴대폰 번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallText style={{ paddingTop: "18px" }}>
        회원가입 때 사용한 번호를 입력해주세요.
      </SmallText>
      <Input placeholder="Phone Number" style={{ margin: "60px 0" }} />
      <Button
        onclick={() => router.push("/find/id/certification")}
        enable={true}
      >
        다음
      </Button>
    </Wrapper>
  );
};

export default FindId;
