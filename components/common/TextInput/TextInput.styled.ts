import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
  color: ${colors.colorFontPrimary};
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 1.3rem 2rem;
  background: ${colors.colorBgSecondaryDarken};
  border-radius: 0.8rem;
  border: 0.2rem solid ${colors.colorBgSecondaryDarken};
  outline: 0;
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
  color: ${colors.colorFontSecondary};
  width: 100%;

  &:hover {
    border: 0.2rem solid ${colors.colorFontSecondary};
  }

  &:focus {
    border: 0.2rem solid ${colors.colorFontPrimaryLighten};
  }
`;
