import {
  BtnGroup,
  LogoHeader,
  LogoWrapper,
  MainHeader,
  MainHeaderWrapper,
  MainLogoImg,
} from './Header.styled';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import LangToggler from './LangToggler/LangToggler';

const Header: React.FC = () => {
  return (
    <MainHeader>
      <MainHeaderWrapper>
        <LogoWrapper>
          <MainLogoImg src='/img/MainLogo.png' width={50} height={50} alt='Main logo' />
          <LogoHeader>Taskrunner</LogoHeader>
        </LogoWrapper>
        <BtnGroup>
          <HeaderButtons />
          <LangToggler />
        </BtnGroup>
      </MainHeaderWrapper>
    </MainHeader>
  );
};

export default Header;
