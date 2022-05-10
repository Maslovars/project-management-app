import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const FooterSpan = styled.span`
  width: 100%;
  background-color: ${colors.colorBgSecondary};
`;

export const FooterWrapper = styled.div`
  height: 100%;
  max-width: 140rem;
  padding: 0.5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  font-size: ${fonts.fontSizeRegular};
  font-weight: ${fonts.fontWeightBold};
  color: black;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

export const LogoSchool = styled.img`
  height: 40px;
  width: 80px;
`;

export const GitHubsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const GitHubsItem = styled.li``;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Year = styled.p`
  font-size: ${fonts.fontSizeRegular};
  font-weight: ${fonts.fontWeightBold};
`;
