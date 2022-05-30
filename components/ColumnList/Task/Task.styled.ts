import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

interface CheckBoxProps {
  checked: boolean;
}

export const Card = styled.li`
  max-width: 29rem;
  margin-bottom: 0.9rem;
  padding: 2rem;
  background-color: ${colors.colorBgPrimaryLighten};
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const Title = styled.h3`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.8rem;
`;

export const Description = styled.p`
  margin-bottom: 0.8rem;
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.5rem;
`;

export const Assigned = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  border: 0.2rem solid ${colors.colorInfo};
  border-radius: 50%;
`;

export const Name = styled.p`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.6rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
