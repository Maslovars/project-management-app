import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global.styled';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import { wrapper } from 'store/store';
import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/Layout/Layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(
    <ErrorBoundary>
      <GlobalStyle />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default appWithTranslation(wrapper.withRedux(App));
