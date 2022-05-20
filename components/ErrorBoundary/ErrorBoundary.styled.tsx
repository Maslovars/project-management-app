import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Error = styled.span`
  color: ${colors.colorError};
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: ${fonts.fontWeightRegular};
`;
export const Button = styled.button`
  padding: 0.3rem 1.4rem 0.4rem;
  font-weight: ${fonts.fontWeightBold};
  text-align: center;
  border-radius: 5rem;
  cursor: pointer;

  color: ${colors.colorEdit};
  background-color: ${colors.colorEditLight};
  border: 0.2rem solid ${colors.colorEditLight};

  :hover {
    border: 0.2rem solid ${colors.colorEdit};
    transition: 0.5s;
  }

  :active {
    color: ${colors.colorEditLight};
    background-color: ${colors.colorEdit};
    border: 0.2rem solid ${colors.colorEdit};
  }
`;
