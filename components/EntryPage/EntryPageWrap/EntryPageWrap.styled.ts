import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 95vh;
  background-color: ${colors.colorBgSecondaryDarken};
`;
