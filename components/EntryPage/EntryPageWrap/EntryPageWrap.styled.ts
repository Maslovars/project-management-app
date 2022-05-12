import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const PageWrap = styled.div`
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.colorBgSecondaryDarken};
`;
