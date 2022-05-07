import styled, { css } from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface RoundedBtnProps {
  variant: 'big' | 'small';
  typeBtn?: 'addBtn' | 'delBtn' | 'otherBtn' | 'editBtn';
}

const bigStyle = css`
  padding: 0.9rem 1.5rem 0.8rem;
`;

const smallStyle = css`
  padding: 0.4rem 1.5rem 0.5rem;
`;

const addBtn = css`
  background-color: ${colors.colorSuccessLight};
  border: 0.2rem solid ${colors.colorSuccessLight};
  color: ${colors.colorFontPrimaryLighten};

  :hover {
    border: 0.2rem solid ${colors.colorSuccess};
  }

  :active {
    border: 0.2rem solid ${colors.colorSuccess};
    background-color: ${colors.colorSuccess};
  }
`;

const delBtn = css`
  background-color: ${colors.colorErrorLight};
  border: 0.2rem solid ${colors.colorErrorLight};
  color: ${colors.colorFontPrimaryLighten};

  :hover {
    border: 0.2rem solid ${colors.colorError};
  }

  :active {
    border: 0.2rem solid ${colors.colorError};
    background-color: ${colors.colorError};
  }
`;

const otherBtn = css`
  background-color: ${colors.colorBgSecondaryDarken};
  border: 0.2rem solid ${colors.colorBgSecondaryDarken};
  color: ${colors.colorFontPrimaryLighten};

  :hover {
    border: 0.2rem solid ${colors.colorFontSecondary};
  }

  :active {
    border: 0.2rem solid ${colors.colorFontSecondary};
    background-color: ${colors.colorFontSecondary};
  }
`;

const editBtn = css`
  background-color: ${colors.colorEditLight};
  border: 0.2rem solid ${colors.colorEditLight};
  color: ${colors.colorFontPrimaryLighten};

  :hover {
    border: 0.2rem solid ${colors.colorEdit};
  }

  :active {
    border: 0.2rem solid ${colors.colorEdit};
    background-color: ${colors.colorEdit};
  }
`;

const getButtonStyles = (type?: string) => {
  switch (type) {
    case 'addBtn':
      return addBtn;

    case 'delBtn':
      return delBtn;

    case 'otherBtn':
      return otherBtn;

    case 'editBtn':
      return editBtn;

    default:
      return '';
  }
};

export const RoundedBtn = styled.button<RoundedBtnProps>`
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.4rem;
  text-align: center;
  border-radius: 5rem;
  cursor: pointer;

  :disabled {
    pointer-events: none;
    background-color: ${colors.colorBgSecondaryDarken};
    border: 0.2rem solid ${colors.colorBgSecondaryDarken};
    color: ${colors.colorFontLight};
  }

  ${(props) => (props.variant === 'big' ? bigStyle : smallStyle)};
  ${(props) => getButtonStyles(props.typeBtn)};
`;
