import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const NotFoundWrap = styled.div`
  height: 95vh;
  width: 100%;
  background-color: ${colors.colorBgPrimaryLighten};
`;

export const NotFoundContent = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(/img/404.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
