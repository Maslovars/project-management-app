import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface isDraggingOverProps {
  isDraggingOver: boolean;
}

export const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  max-height: 100%;
  padding: 3rem;
  background-color: ${colors.colorBgSecondary};
  border-radius: 0.8rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.1rem;
`;

export const Title = styled.h2`
  margin-right: 1rem;
  overflow: hidden;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 2.6rem;
  text-overflow: ellipsis;

  :hover {
    cursor: url('/icons/pencil.png') 15 30, auto;
  }
`;

export const TasksContainer = styled.ul<isDraggingOverProps>`
  height: 85%;
  margin-bottom: 2rem;
  padding: 0.9rem 0.9rem 0 0.9rem;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 1rem;
  transition: background-color 0.2s ease;
  ${(props) =>
    props.isDraggingOver
      ? `background-color: ${colors.colorInfoLight}`
      : 'background-color: inherit'};
`;
