import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"
import { ColorSchemeScript } from '@mantine/core';

export default class _Document extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <ColorSchemeScript defaultColorScheme="light" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
