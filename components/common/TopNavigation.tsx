import styled from "@emotion/styled";
import Image from "next/image";
import SmallText from "../text/SmallText";
import { useRouter } from "next/router";

interface TopNavigationProps {
  onClick?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = (props) => {
  const { onClick, children } = props;
  const rotuer = useRouter();
  return (
    <TopNavigationBox>
      <NavigationContent>
        <Image
          src="/images/keyboard_backspace.png"
          width={24}
          height={24}
          alt="arrow"
          onClick={() => (onClick ? onClick() : rotuer.back())}
          priority
        />
        <SmallText style={{ paddingTop: "3px" }}>{children}</SmallText>
      </NavigationContent>
    </TopNavigationBox>
  );
};

const TopNavigationBox = styled.div`
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #dadada;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const NavigationContent = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-left: 24px;
`;

export default TopNavigation;
