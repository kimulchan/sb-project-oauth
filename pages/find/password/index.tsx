import {
  Button,
  Input,
  TopNavigation,
  Wrapper,
} from "../../../components/common";
import { BigText, MiddleText, OtherOptionText } from "../../../components/text";
import { useRouter } from "next/router";
const FindPassword = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation onClick={() => router.push("/auth/main")}>
        메인
      </TopNavigation>
      <BigText>아이디</BigText>
      <MiddleText>를 입력해 주세요</MiddleText>
      <Input style={{ margin: "65px 0 52px 0" }} placeholder="Email"></Input>
      <Button
        enable={true}
        onclick={() => router.push("/find/password/phonenum")}
      >
        다음
      </Button>
      <OtherOptionText
        style={{ marginTop: 27 }}
        actionTextOnClick={() => router.push("/find/id")}
        actionText="아이디 찾기"
      >
        야이디가 기억나지 않아요?
      </OtherOptionText>
    </Wrapper>
  );
};

export default FindPassword;
