"use client";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import i18next from "i18next"; // Importando diretamente
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const {  } = useTranslation(); // Obtendo `i18n` corretamente

  const changeLanguage = (lang: string) => {
    if (i18next.changeLanguage) {
      i18next.changeLanguage(lang); // Mudando o idioma corretamente
    } else {
      console.error("i18n.changeLanguage não está disponível.");
    }
    router.push(router.pathname, router.pathname, { locale: lang }); // Atualizando a URL
  };

  return (
    <div className="flex justify-around w-full">
      {/* Botão para Português 🇧🇷 */}
      <button onClick={() => changeLanguage("pt")} className="p-2 hover:scale-110 transition-transform">
        <Image src="/flags/br.svg" alt="Português" width={30} height={30} />
      </button>

      {/* Botão para Inglês 🇺🇸 */}
      <button onClick={() => changeLanguage("en")} className="p-2 hover:scale-110 transition-transform">
        <Image src="/flags/us.svg" alt="English" width={30} height={30} />
      </button>

      {/* Botão para Espanhol 🇪🇸 */}
      <button onClick={() => changeLanguage("es")} className="p-2 hover:scale-110 transition-transform">
        <Image src="/flags/es.svg" alt="Español" width={30} height={30} />
      </button>
    </div>
  );
}
