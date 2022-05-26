import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const PageMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  background-color: ${colors.colorBgSecondaryDarken};
`;
