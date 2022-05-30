import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

const WelcomeMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.colorBgPrimaryLighten};
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: 140rem;
  height: 80%;
  padding: 0 2rem;
  background-image: url(/img/welcomeBg.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-radius: 8px;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  width: 40%;
  height: 100%;
  padding-right: 3rem;
  background: linear-gradient(to right, rgba(247, 246, 243, 0.8) 70%, rgba(247, 246, 243, 0) 100%);
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: ${fonts.fontWeightBlack};
  font-size: ${fonts.fontSizeLogo};
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  font-weight: ${fonts.fontWeightRegular};
  font-size: ${fonts.fontSizeTitle};
  line-height: 150%;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-weight: ${fonts.fontWeightRegular};
  font-size: ${fonts.fontSizeSubTitle};
  line-height: 150%;
  @media (max-width: ${breakpoints.md}) {
    font-size: ${fonts.fontSizeRegular};
  }
`;

export { WelcomeMain, WrapperContent, TextBlock, Title, Text, SubTitle };
