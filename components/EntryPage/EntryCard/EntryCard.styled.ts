import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import Image from 'next/image';

export const EntryCardWrap = styled.div`
  padding: 4rem 5rem;
  background-color: ${colors.colorBgSecondary};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 8px;
  h2 {
    font-weight: ${fonts.fontWeightBold};
    font-size: ${fonts.fontSizeTitle};
    align-items: center;
    align-self: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  span {
    color: ${colors.colorFontPrimaryLighten};
    font-size: ${fonts.fontSizeRegular}*0.6;
    font-weight: ${fonts.fontWeightRegular};
  }
`

export const Svg = styled.div`
  height: 6rem;
  width: 6rem;
  background-image: url(/img/LogoEntry.svg);
  background-repeat: no-repeat;
  background-size: contain;
`