import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckBoxLabel = styled.label`
  width: 6rem;
  height: 2.9rem;
  background: ${colors.colorBgPrimary};
  border-radius: 2.4rem;
  box-shadow: inset 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &::after {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0.5rem;
    background: ${colors.colorFontPrimary};
    border-radius: 50%;
    box-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
    transition: all ease-in 0.25s;
    content: '';
  }
`;

export const CheckBox = styled.input`
  z-index: 1;
  display: none;
  width: 6rem;
  height: 2.9rem;
  border-radius: 2.4rem;
  opacity: 0;
  &:checked + ${CheckBoxLabel} {
    background: ${colors.colorBgPrimary};
    &::after {
      display: block;
      width: 2rem;
      height: 2rem;
      margin-left: 3.5rem;
      border-radius: 50%;
      box-shadow: 0px 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
      transition: all ease-in 0.25s;
      content: '';
    }
  }
`;
