import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const OverlayLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.colorFontPrimary};
  opacity: 0.6;
  z-index: 100;
`;
