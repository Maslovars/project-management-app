import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Card = styled.li`
  max-width: 44.5rem;
  padding: 3rem;
  background-color: ${colors.colorBgSecondary};
  border-radius: 0.8rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: ${fonts.fontSizeTitle};
`;
export const Body = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Column = styled.li`
  max-width: 38.5rem;
  padding: 2rem;
  background-color: ${colors.colorBgPrimaryLighten};
  border-radius: 1rem;
`;
export const ColumnTitle = styled.h3`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
`;
