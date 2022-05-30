import styled, { keyframes } from 'styled-components';

const showInput = keyframes`
0% {
  opacity: 0;

}

100% {
  opacity: 0.6;
}
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  animation: ${showInput} 0.2s ease;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
  gap: 0.5rem;
`;
