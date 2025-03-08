import Cabecalho from "@/components/template/cabecalho";
import Depoimentos from "@/components/template/depoimentos";
import Destaque from "@/components/template/destaque";
import QuemSomos from "@/components/template/vantagens";
import Rodape from "@/components/template/rodape";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation(); // Pegando `t` diretamente do hook

  return (
    <>
      <Cabecalho /> {/* Passando `t` para o cabeçalho */}
      <Destaque t={t} />
      <QuemSomos t={t} />
      <Depoimentos t={t} />
      <Rodape />
    </>
  );
}
