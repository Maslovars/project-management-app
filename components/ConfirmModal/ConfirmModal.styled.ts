import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 3.2rem;
  max-width: 35rem;
  padding: 2rem;
  overflow: hidden;
  background-color: ${colors.colorBgSecondary};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
`;

export const Title = styled.p`
  margin-bottom: 2rem;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
`;
