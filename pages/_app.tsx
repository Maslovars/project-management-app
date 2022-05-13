import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global.styled';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
