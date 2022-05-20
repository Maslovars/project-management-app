import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  max-height: 100%;
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
  margin-right: 1rem;
  overflow: hidden;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
  text-overflow: ellipsis;
`;

export const TasksContainer = styled.ul`
  height: 100%;
  margin-bottom: 2rem;
  padding-right: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
