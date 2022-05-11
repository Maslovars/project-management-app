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
  color: ${colors.colorFontPrimaryLighten};
  background-color: ${colors.colorSuccessLight};
  border: 0.2rem solid ${colors.colorSuccessLight};

  :hover {
    border: 0.2rem solid ${colors.colorSuccess};
  }

  :active {
    background-color: ${colors.colorSuccess};
    border: 0.2rem solid ${colors.colorSuccess};
  }
`;

const delBtn = css`
  color: ${colors.colorFontPrimaryLighten};
  background-color: ${colors.colorErrorLight};
  border: 0.2rem solid ${colors.colorErrorLight};

  :hover {
    border: 0.2rem solid ${colors.colorError};
  }

  :active {
    background-color: ${colors.colorError};
    border: 0.2rem solid ${colors.colorError};
  }
`;

const otherBtn = css`
  color: ${colors.colorFontPrimaryLighten};
  background-color: ${colors.colorBgSecondaryDarken};
  border: 0.2rem solid ${colors.colorBgSecondaryDarken};

  :hover {
    border: 0.2rem solid ${colors.colorFontSecondary};
  }

  :active {
    background-color: ${colors.colorFontSecondary};
    border: 0.2rem solid ${colors.colorFontSecondary};
  }
`;

const editBtn = css`
  color: ${colors.colorFontPrimaryLighten};
  background-color: ${colors.colorEditLight};
  border: 0.2rem solid ${colors.colorEditLight};

  :hover {
    border: 0.2rem solid ${colors.colorEdit};
  }

  :active {
    background-color: ${colors.colorEdit};
    border: 0.2rem solid ${colors.colorEdit};
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
  white-space: nowrap;

  :disabled {
    color: ${colors.colorFontSecondary};
    background-color: ${colors.colorBgSecondaryDarken};
    border: 0.2rem solid ${colors.colorFontSecondary};
    pointer-events: none;
  }

  ${(props) => (props.variant === 'big' ? bigStyle : smallStyle)};
  ${(props) => getButtonStyles(props.typeBtn)};
`;
