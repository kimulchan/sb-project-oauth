import { Button, TopNavigation, Wrapper } from "../../components/common";
import { BigText, MiddleText } from "../../components/text";

const Profileimg = () => {
  return (
    <Wrapper>
      <TopNavigation>이메일</TopNavigation>
      <BigText>프로필 사진</BigText>
      <MiddleText>을 등록해 주세요</MiddleText>
      <Button enable={true} onclick={() => {}}>
        다음
      </Button>
    </Wrapper>
  );
};

export default Profileimg;
