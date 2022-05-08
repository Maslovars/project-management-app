import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div`
  display: flex;
  background-color: ${colors.colorBgPrimary};
  padding: 3rem;
  height: 100vh;
`;

export const CardList = styled.div`
  max-width: 35rem;
  border-radius: 0.8rem;
  background-color: ${colors.colorBgSecondary};
  padding: 3rem;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
  color: ${colors.colorFontPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1rem;
`;

export const TasksContainer = styled.ul`
  height: 85%;
  margin-bottom: 2rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 0.5rem;
`;
