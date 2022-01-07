import styled from "@emotion/styled";
import {
  Input,
  Wrapper,
  TopNavigation,
  Button,
  CheckBox,
} from "../../components/common";
import { IconText, OtherOptionText, SmallText } from "../../components/text";
import Image from "next/image";
import { useRouter } from "next/router";
const Main = () => {
  const router = useRouter();
  return (
    <Wrapper style={{ marginTop: "100px" }}>
      <IconText>SB Auth</IconText>
      <InputWrapper>
        <Input placeholder="Email or Phone Number"></Input>

        <Input placeholder="PASSWORD">
          <Image
            src="/images/openEye.svg"
            width={24}
            height={24}
            alt="open eyes"
            priority
          />
        </Input>
      </InputWrapper>
      <CheckBoxWrapper>
        <CheckBox isAction={true} />
        <SmallText>로그인 상태 유지</SmallText>
      </CheckBoxWrapper>
      <Button enable={true} onclick={() => {}}>
        로그인
      </Button>
      <OtherOptionText
        actionText="회원가입 하기"
        actionTextOnClick={() => router.push("/auth/name")}
        style={{
          marginTop: "14px",
          marginBottom: "62px",
        }}
      >
        계정이 없으신가요?
      </OtherOptionText>
      <FindWrapper>
        <SmallText onClick={() => router.push("/find/id")}>
          아이디 찾기
        </SmallText>
        <Image
          priority
          width={1}
          height={12}
          src="/images/Line.svg"
          alt="line"
        ></Image>
        <SmallText onClick={() => router.push("/find/password")}>
          비밀번호 찾기
        </SmallText>
      </FindWrapper>
    </Wrapper>
  );
};

const InputWrapper = styled.div`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 42px;
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 9px;
  margin-top: 17px;
  margin-bottom: 77px;
  align-items: center;
`;
const FindWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export default Main;
