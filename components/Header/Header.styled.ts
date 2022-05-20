import styled from 'styled-components';
import { colors } from '@/variables/colors.styled';
import Image from 'next/image';

export const MainHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${colors.colorFontLight};
`;

export const MainHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 140rem;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoHeader = styled.h1`
  margin-left: 1rem;
`;

export const MainLogoImg = styled(Image)`
  border-radius: 50%;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
