import Cabecalho from "@/components/template/cabecalho";
import Depoimentos from "@/components/template/depoimentos";
import Destaque from "@/components/template/destaque";
import QuemSomos from "@/components/template/vantagens";
import Rodape from "@/components/template/rodape"
import React from "react";

export default function Landing() {
  return (
    <>
      <Cabecalho />
      <Destaque />
      <QuemSomos />
      <Depoimentos />
      <Rodape />
    </>
  );
}
