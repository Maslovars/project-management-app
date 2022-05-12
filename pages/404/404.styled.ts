import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';
import { breakpoints } from '@/variables/response.styled';

export const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.colorBgPrimaryLighten};
`;

export const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  max-width: 140rem;
  height: 80%;
  padding: 0 2rem;
  background-image: url(/img/welcomeBg.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-radius: 8px;
`;