import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const NotFoundMain = styled.main`
  flex: 1 0 auto;
  width: 100%;
  background-color: ${colors.colorBgPrimaryLighten};
`;

export const NotFoundContent = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/img/404.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
