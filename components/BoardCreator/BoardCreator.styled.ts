import styled from 'styled-components';
import { fonts } from '@/variables/fonts.styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const InputTitle = styled.h3`
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.4rem;
`;
