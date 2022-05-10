import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

const WelcomeSpan = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.colorBgPrimaryLighten};
`;

const WrapperContent = styled.div`
  height: 80%;
  max-width: 140rem;
  padding: 0 2rem;
  border-radius: 8px;
  background-image: url(/img/welcomeBg.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const TextBlock = styled.div`
  height: 100%;
  width: 40%;
  padding-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  background: linear-gradient(to right, rgba(247, 246, 243, 0.8) 70%, rgba(247, 246, 243, 0) 100%);
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: ${fonts.fontSizeLogo};
  font-weight: ${fonts.fontWeightBlack};
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  font-size: ${fonts.fontSizeTitle};
  font-weight: ${fonts.fontWeightRegular};
  text-transform: uppercase;
  line-height: 150%;
`;

const Text = styled.p`
  font-size: ${fonts.fontSizeSubTitle};
  font-weight: ${fonts.fontWeightRegular};
  line-height: 150%;
  @media (max-width: ${breakpoints.md}) {
    font-size: ${fonts.fontSizeRegular};
  }
`;

export { WelcomeSpan, WrapperContent, TextBlock, Title, Text, SubTitle };
