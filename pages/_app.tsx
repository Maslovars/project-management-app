import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global.styled';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import Header from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { wrapper } from 'store/store';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Provider } from 'react-redux';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <>
        <Header />
        {page}
        <Footer />
      </>
    ));

  return getLayout(
    <ErrorBoundary>
      <GlobalStyle />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default wrapper.withRedux(App);
