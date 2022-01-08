import {
  Button,
  Input,
  TopNavigation,
  Wrapper,
} from "../../../components/common";
import { BigText, MiddleText, SmallText } from "../../../components/text";
import { useRouter } from "next/router";

const Phonenum = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <TopNavigation>아이디</TopNavigation>
      <BigText>휴대폰 번호</BigText>
      <MiddleText>를 입력해주세요</MiddleText>
      <SmallText style={{ padding: "16px 0" }}>
        본인 명의로 된 휴대폰 번호를 입력해주세요
      </SmallText>
      <Input placeholder="Phone Number" style={{ margin: "50px 0" }} />
      <Button
        enable={true}
        onclick={() => router.push("/find/password/certification")}
      >
        다음
      </Button>
    </Wrapper>
  );
};

export default Phonenum;
