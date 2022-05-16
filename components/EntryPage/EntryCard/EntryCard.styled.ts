import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const EntryCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 5rem;
  background-color: ${colors.colorBgSecondary};
  border-radius: 8px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 3rem 2rem;
  }
  h2 {
    align-items: center;
    align-self: center;
    font-weight: ${fonts.fontWeightBold};
    font-size: ${fonts.fontSizeTitle};
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  span {
    color: ${colors.colorFontPrimaryLighten};
    font-weight: ${fonts.fontWeightRegular};
    font-size: ${fonts.fontSizeRegular}*.8;
    font-style: italic;
  }
  a {
    color: blue;
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Svg = styled.div`
  width: 6rem;
  height: 6rem;
  background-image: url(/img/LogoEntry.svg);
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: ${breakpoints.sm}) {
    width: 4rem;
    height: 4rem;
  }
`;
