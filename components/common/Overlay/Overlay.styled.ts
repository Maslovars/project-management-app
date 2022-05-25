import styled, { keyframes } from 'styled-components';
import { colors } from '@/variables/colors.styled';

const showOverLay = keyframes`
0% {
  opacity: 0;

}

100% {
  opacity: 0.6;
}
`;

export const OverlayLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${colors.colorFontPrimary};
  opacity: 0.6;
  animation: ${showOverLay} 0.3s ease-out;
`;
