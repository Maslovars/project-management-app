import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface ModalProps {
  active: boolean;
}

export const Modal = styled.div<ModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  ${(props) => (props.active ? 'opacity: 1' : 'opacity: 0')};
  ${(props) => (props.active ? 'pointer-events: all' : 'pointer-events: none')};
`;

export const ModalContent = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 3.2rem;
  max-width: 35rem;
  padding: 2rem;
  overflow: hidden;
  background-color: ${colors.colorBgSecondary};
  border-radius: 1rem;
  transition: 0.4s all;
  ${(props) => (props.active ? 'transform: scale(1)' : 'transform: scale(0.5)')}
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
