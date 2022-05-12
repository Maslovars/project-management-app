import type { AppProps } from 'next/app';
import { GlobalStyle } from 'styles/global.styled';
import { Layout } from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
