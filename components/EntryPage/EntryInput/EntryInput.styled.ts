import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const ErrorMessage = styled.div`
  font-size: 10px;
  color: ${colors.colorError};
  width: 100%;
  margin-top: 0.1rem;
  &:before {
    content: '';
    font-size: 10px;
  }
`;
export const Container = styled.div``;
export const ErrorMessageWrap = styled.div`
  width: 100%;
  height: 2rem;
`;
