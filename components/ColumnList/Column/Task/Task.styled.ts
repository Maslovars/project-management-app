import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Card = styled.li`
  background-color: ${colors.colorBgPrimaryLighten};
  border-radius: 1rem;
  max-width: 29rem;
  padding: 2rem 3rem;
  margin-bottom: 0.9rem;
`;

export const Title = styled.h3`
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.8rem;
  color: ${colors.colorFontPrimary};
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.5rem;
  color: ${colors.colorFontPrimary};
  margin-bottom: 0.8rem;
`;

export const Assigned = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 0.2rem solid ${colors.colorBgSecondary};
  margin-right: 1rem;
`;

export const Name = styled.p`
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.6rem;
  color: ${colors.colorFontPrimary};
`;

export const FileImage = styled.img`
  margin-bottom: 2rem;
  width: 23rem;
  height: 8.5rem;
  border-radius: 1rem;
  object-fit: cover;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
