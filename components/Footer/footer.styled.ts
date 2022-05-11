import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const FooterSpan = styled.span`
  width: 100%;
  background-color: ${colors.colorBgSecondary};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: 140rem;
  height: 100%;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  color: black;
  font-weight: ${fonts.fontWeightBold};
  font-size: ${fonts.fontSizeRegular};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    opacity: 0.3;
  }
`;

export const LogoSchool = styled.img`
  width: 80px;
  height: 40px;
`;

export const GitHubsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const GitHubsItem = styled.li``;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Year = styled.p`
  font-weight: ${fonts.fontWeightBold};
  font-size: ${fonts.fontSizeRegular};
`;
