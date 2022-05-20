import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.main`
  height: 86%;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  background-color: ${colors.colorBgPrimary};
`;

export const HeaderBoard = styled.div`
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

export const BoardLayout = styled.div`
  height: 100vh;
`;
