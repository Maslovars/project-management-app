import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div`
  padding: 1rem;
`;
export const Title = styled.span`
  color: ${colors.colorFontSecondary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.4rem;
  transition: all 0.3s ease;
`;
export const Label = styled.label`
  display: block;
  width: 10rem;
  text-align: center;
  border: 0.2rem dashed ${colors.colorFontSecondary};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    border: 0.2rem solid ${colors.colorSuccess};
  }

  &:hover ${Title} {
    color: ${colors.colorSuccess};
  }
`;

export const Input = styled.input`
  width: 1px;
  outline: 0;
  opacity: 0;
  user-select: none;
  pointer-events: none;
`;
