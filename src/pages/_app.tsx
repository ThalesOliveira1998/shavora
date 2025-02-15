import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import '@mantine/core/styles.css'; // Importação dos estilos globais
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Component {...pageProps} />
    </MantineProvider>
  );
}
