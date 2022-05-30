import Header from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { LayoutWrap } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      {children}
      <Footer />
    </LayoutWrap>
  );
};
