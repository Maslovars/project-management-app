import styled, { css } from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface LabelProps {
  empty: boolean;
}

const Empty = css`
  border: 0.2rem dashed ${colors.colorFontSecondary};

  :hover {
    border: 0.2rem solid ${colors.colorSuccess};
  }
`;

const Full = css`
  border: 0.2rem solid ${colors.colorSuccess};
`;

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<LabelProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.4rem;
  transition: all 0.3s ease;
  cursor: pointer;
  ${(props) =>
    props.empty ? `color: ${colors.colorFontSecondary}` : `color: ${colors.colorSuccess}`};
`;

export const Label = styled.label<LabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem;
  margin-bottom: 0.5rem;

  &:hover ${Title} {
    color: ${colors.colorSuccess};
  }

  ${(props) => (props.empty ? Empty : Full)};
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
