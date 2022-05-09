import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.colorBgSecondary};
  width: 100%;
  max-width: 59.6rem;
  min-width: 3.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${colors.colorFontSecondary};
`;

export const Title = styled.p`
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
  color: ${colors.colorFontPrimary};
`;

export const Close = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2.6rem;
  color: ${colors.colorFontSecondary};
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;
`;
