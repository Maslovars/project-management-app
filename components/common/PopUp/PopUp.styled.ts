import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 3.2rem;
  max-width: 40rem;
  overflow: hidden;
  background-color: ${colors.colorBgSecondary};
  border-radius: 1rem;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  border-bottom: 0.1rem solid ${colors.colorFontSecondary};
`;

export const Title = styled.p`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
`;

export const Close = styled.button`
  color: ${colors.colorFontSecondary};
  font-size: 2.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
