import { RoundedButton } from '../common/RoundedButton';
import {
  BtnWrapper,
  LogoHeader,
  LogoWrapper,
  MainHeader,
  MainHeaderWrapper,
  MainLogoImg,
} from './Header.styled';

const Header: React.FC = () => {
  return (
    <MainHeader>
      <MainHeaderWrapper>
        <LogoWrapper>
          <MainLogoImg src="/img/MainLogo.png" width={50} height={50} alt="Main logo" />
          <LogoHeader>Logo</LogoHeader>
        </LogoWrapper>
        <BtnWrapper>
          <RoundedButton variant="small" typeBtn="otherBtn">
            Sign In
          </RoundedButton>
          <RoundedButton variant="small" typeBtn="otherBtn">
            Sign Out
          </RoundedButton>
        </BtnWrapper>
      </MainHeaderWrapper>
    </MainHeader>
  );
};

export default Header;
