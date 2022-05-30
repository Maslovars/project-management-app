import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.main`
  flex: 1 0 auto;
  padding: 2rem;
  background-color: ${colors.colorBgPrimary};
`;

export const BoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 2rem;
`;

export const AddNewBoardBtn = styled.div`
  width: 100%;
  max-width: 44.5rem;
  max-height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  background-color: ${colors.colorBgSecondary};
  border-radius: 0.8rem;
  cursor: pointer;
  border: 0.2rem solid ${colors.colorBgSecondary};
  transition: all 0.3s ease-in;
  &:hover {
    border: 0.2rem solid ${colors.colorFontSecondary};
  }
`;

export const Title = styled.h2`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: ${fonts.fontSizeTitle};
`;
