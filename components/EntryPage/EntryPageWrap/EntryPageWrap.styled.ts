import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const PageMain = styled.main`
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: ${colors.colorBgSecondaryDarken};
`;
