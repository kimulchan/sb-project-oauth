import {
  Button,
  Input,
  TopNavigation,
  Wrapper,
} from "../../../components/common";
import {
  BigText,
  MiddleText,
  OtherOptionText,
  SmallText,
} from "../../../components/text";
import { useRouter } from "next/router";
const Certification = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>휴대폰 번호</TopNavigation>
      <BigText>인증번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>
        입력한 번호로 인증번호를 발송했습니다.
      </SmallText>
      <Input
        placeholder="인증번호를 입력해주세요."
        style={{ margin: "50px 0" }}
      ></Input>
      <Button
        enable={true}
        onclick={() => router.push("/find/id/result")}
        style={{ margin: "22px 0" }}
      >
        다음
      </Button>
      <OtherOptionText actionText="새인증받기" actionTextOnClick={() => {}}>
        인증번호가 오지 않았나요?
      </OtherOptionText>
    </Wrapper>
  );
};

export default Certification;
