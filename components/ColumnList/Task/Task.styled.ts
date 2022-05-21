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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Title = styled.h3`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.8rem;
`;

export const Check = styled.label`
  width: 3rem;
  height: 3rem;
  position: relative;
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${colors.colorBgSecondary};
  border-radius: 0.4rem;
  transition: all 0.3s ease;

  :hover {
    box-shadow: 0 0 0 0.3rem ${colors.colorFontSecondary};
  }
`;

export const CheckInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const CheckBox = styled.span<CheckBoxProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 0.4rem;
  background-color: ${colors.colorSuccessLight};
  background-image: url('/check-mark.svg');
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;
  visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
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

export const FileImage = styled.img`
  width: 23rem;
  width: 100%;
  height: 8.5rem;
  margin-bottom: 2rem;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
