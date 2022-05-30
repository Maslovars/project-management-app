import { RoundedButton } from '@/components/common/RoundedButton';
import { BtnWrapper } from './HeaderButtons.styled';

const HeaderButtons: React.FC = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return (
      <BtnWrapper>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          Sign In
        </RoundedButton>
        <RoundedButton variant='small' typeBtn='otherBtn'>
          Sign Up
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
          Sign Out
        </RoundedButton>
      </BtnWrapper>
    );
  }
};

export default HeaderButtons;
