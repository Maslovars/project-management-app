import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckBoxLabel = styled.label`
  width: 6rem;
  height: 2.9rem;
  border-radius: 2.4rem;
  background: ${colors.colorBgPrimary};
  cursor: pointer;
  box-shadow: inset 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.5rem;
    background: ${colors.colorFontPrimary};
    box-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    transition: all ease-in 0.25s;
  }
`;

export const CheckBox = styled.input`
  display: none;
  opacity: 0;
  z-index: 1;
  width: 6rem;
  height: 2.9rem;
  border-radius: 2.4rem;
  &:checked + ${CheckBoxLabel} {
    background: ${colors.colorBgPrimary};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      margin-left: 3.5rem;
      box-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
      transition: all ease-in 0.25s;
    }
  }
`;
