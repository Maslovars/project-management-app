import styled, { keyframes } from 'styled-components';
import { colors } from '@/variables/colors.styled';

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
export const Spinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 8rem;
  height: 8rem;
  transform: translate(-50%, -50%);

  div {
    position: absolute;
    display: block;
    width: 6.4rem;
    height: 6.4rem;
    margin: 0.8rem;
    border: 0.8rem solid ${colors.colorEditLight};
    border-color: ${colors.colorEditLight} transparent transparent transparent;
    border-radius: 50%;
    animation: ${spinner} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
