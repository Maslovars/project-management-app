import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import { fonts } from '@/variables/fonts.styled';

export const Container = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-right: 0.5rem;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.span`
  color: ${colors.colorFontPrimary};
  font-weight: ${fonts.fontWeightBold};
  font-size: 1.4rem;
`;

export const Size = styled.span`
  color: ${colors.colorFontSecondary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.4rem;
`;

export const Empty = styled.h2`
  color: ${colors.colorFontSecondary};
  font-weight: ${fonts.fontWeightRegular};
  font-size: 1.4rem;
`;
