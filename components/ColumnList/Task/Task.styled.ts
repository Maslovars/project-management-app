import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface CheckBoxProps {
  checked: boolean;
}

export const Card = styled.li`
  max-width: 29rem;
  margin-bottom: 0.9rem;
  padding: 2rem;
  background-color: ${colors.colorBgPrimaryLighten};
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const Title = styled.h3`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.8rem;
`;

export const Check = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  background-color: ${colors.colorBgSecondary};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    box-shadow: 0 0 0 0.3rem ${colors.colorFontSecondary};
  }
`;

export const CheckInput = styled.input`
  position: absolute;
  appearance: none;
`;

export const CheckBox = styled.span<CheckBoxProps>`
  width: 3rem;
  height: 3rem;
  background-color: ${colors.colorSuccessLight};
  background-image: url('/check-mark.svg');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.4rem;
  transition: all 0.3s ease;
  ${(props) => (props.checked ? 'visibility: visible' : 'visibility: hidden')};
`;

export const Description = styled.p`
  margin-bottom: 0.8rem;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.5rem;
`;

export const Assigned = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  border: 0.2rem solid ${colors.colorBgSecondary};
  border-radius: 50%;
`;

export const Name = styled.p`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.6rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
