import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en', 'es'], // Idiomas suportados
    defaultLocale: 'pt',         // Idioma padrão
  }
};

export default nextConfig;
