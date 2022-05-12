import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 95vh;
  background-color: ${colors.colorBgPrimary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0 2rem;
`;

export const BoardTitle = styled.h1`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBlack};
  font-size: 2.6rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
`;
