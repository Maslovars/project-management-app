import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const Container = styled.main`
  flex: 1 0 auto;
  padding: 2rem;
  background-color: ${colors.colorBgPrimary};
`;
export const BoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
