import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const ErrorMessage = styled.div`
  width: 100%;
  margin-top: 0.1rem;
  color: ${colors.colorError};
  font-size: 10px;
  &:before {
    font-size: 10px;
    content: '';
  }
`;
export const Container = styled.div``;
export const ErrorMessageWrap = styled.div`
  width: 100%;
  height: 2rem;
`;
