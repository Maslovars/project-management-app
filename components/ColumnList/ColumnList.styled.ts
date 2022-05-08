import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: auto;
  background-color: ${colors.colorBgPrimary};
  padding: 3rem;
  height: 100vh;
  overflow-x: scroll;
`;

export const Item = styled.li`
  margin-right: 3rem;
`;
