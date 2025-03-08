import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next"; // ✅ Importando corretamente
import "../i18n"; // ✅ Garantindo que o i18n está carregado
import "@mantine/core/styles.css";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default appWithTranslation(App); // ✅ Garantindo que `useTranslation()` funcione globalmente
