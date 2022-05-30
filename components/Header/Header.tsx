import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  BtnGroup,
  LogoHeader,
  LogoWrapper,
  MainHeader,
  MainHeaderWrapper,
  MainLogoImg,
} from './Header.styled';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { StyledLink } from './HeaderButtons/HeaderButtons.styled';
import LangToggler from './LangToggler/LangToggler';

const Header: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState([]);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem('user')));
  }, [loggedIn]);

  return (
    <MainHeader>
      <MainHeaderWrapper>
        <Link href={'/'}>
          <StyledLink>
            <LogoWrapper>
              <MainLogoImg src='/img/MainLogo.png' width={50} height={50} alt='Main logo' />
              <LogoHeader>Taskrunner</LogoHeader>
            </LogoWrapper>
          </StyledLink>
        </Link>
        <BtnGroup>
          <HeaderButtons />
          <LangToggler />
        </BtnGroup>
      </MainHeaderWrapper>
    </MainHeader>
  );
};

export default Header;
