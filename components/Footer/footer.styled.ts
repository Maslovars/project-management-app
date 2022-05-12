import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const FooterSpan = styled.div`
  width: 100%;
  background-color: ${colors.colorBgSecondary};
`;

export const FooterWrapper = styled.div`
  min-height: 5vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 140rem;
  height: 100%;
  margin: 0 auto;
  font-size: ${fonts.fontSizeRegular};
  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
    gap: .5rem;
    font-size: ${fonts.fontSizeRegular}*.6;
  }
`;

export const Link = styled.a`
  color: black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.3;
  }
`;

export const LogoSchool = styled.img`
  width: 8rem;
  height: 4rem;
  @media (max-width: ${breakpoints.sm}) {
    width: 6rem;
    height: 3rem;  
  }
`;

export const GitHubsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  @media (max-width: ${breakpoints.sm}) {
    gap: .2rem;
    order: 1;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  @media (max-width: ${breakpoints.sm}) {
    gap: .2rem;
 
  }
`;
