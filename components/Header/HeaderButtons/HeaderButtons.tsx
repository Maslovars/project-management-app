import { RoundedButton } from '@/components/common/RoundedButton';
import { BtnWrapper, StyledLink } from './HeaderButtons.styled';
import { logout } from '../../../services/auth/services';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderButtons: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState([]);

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem('user')));
  }, [loggedIn]);

  const handleLogout = () => {
    setLoggedIn([]);
    logout();
  };

  if (!loggedIn) {
    return (
      <BtnWrapper>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          <Link href='/login'>
            <StyledLink>Sign In</StyledLink>
          </Link>
        </RoundedButton>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          <Link href='/signup'>
            <StyledLink>Sign Up</StyledLink>
          </Link>
        </RoundedButton>
      </BtnWrapper>
    );
  }

  if (loggedIn) {
    return (
      <BtnWrapper>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          Create New Board
        </RoundedButton>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          Edit Profile
        </RoundedButton>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          <Link href='/'>
            <StyledLink onClick={handleLogout}>Sign Out</StyledLink>
          </Link>
        </RoundedButton>
      </BtnWrapper>
    );
  }
};

export default HeaderButtons;
