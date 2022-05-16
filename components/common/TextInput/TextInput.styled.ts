import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div``;

export const Description = styled.p`
  margin-bottom: 1rem;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  color: ${colors.colorFontSecondary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
  background: ${colors.colorBgSecondaryDarken};
  border: 0.2rem solid ${colors.colorBgSecondaryDarken};
  border-radius: 0.8rem;
  outline: 0;

  &:hover {
    border: 0.2rem solid ${colors.colorFontSecondary};
  }

  &:focus {
    border: 0.2rem solid ${colors.colorFontPrimaryLighten};
  }

  &::placeholder {
    color: ${colors.colorFontSecondary};
    font-weight: ${fonts.fontWeightRegular};
    font-size: ${fonts.fontSizeRegular}*0.9;
    font-style: italic;
    opacity: 0.5;
  }
`;
