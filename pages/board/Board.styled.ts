import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.main`
  background-color: ${colors.colorBgPrimary};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  justify-content: space-between;
`;

export const BoardTitle = styled.h1`
  font-weight: ${fonts.fontWeightBlack};
  font-size: 2.6rem;
  color: ${colors.colorFontPrimary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;
