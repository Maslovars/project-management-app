import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: auto;
  background-color: ${colors.colorBgPrimary};
  padding: 3rem;
  max-height: 100%;
  overflow-x: scroll;
  gap: 3rem;
`;

export const Item = styled.li`
  max-height: 100%;
`;
