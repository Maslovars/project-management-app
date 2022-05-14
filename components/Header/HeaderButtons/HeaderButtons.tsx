import { RoundedButton } from '@/components/common/RoundedButton';
import { BtnWrapper } from './HeaderButtons.styled';
const HeaderButtons: React.FC = () => {
  return (
    <BtnWrapper>
      <RoundedButton variant="small" typeBtn="otherBtn">
        Sign In
      </RoundedButton>
      <RoundedButton variant="small" typeBtn="otherBtn">
        Sign Up
      </RoundedButton>
    </BtnWrapper>
  );
};

export default HeaderButtons;
