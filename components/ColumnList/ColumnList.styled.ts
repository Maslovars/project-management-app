import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const Container = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 3rem;
  width: auto;
  max-height: 100%;
  padding: 3rem;
  overflow-x: auto;
  background-color: ${colors.colorBgPrimary};
`;

export const Item = styled.li`
  max-height: 100%;
`;
