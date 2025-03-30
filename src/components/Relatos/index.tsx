"use client";

import { useTranslation } from "react-i18next";
import Cabecalho from "../template/cabecalho";
import Rodape from "../template/rodape";
import { Container } from "@mantine/core";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ConteSeuRelatoModal from "@/components/Relatos/ConteSeuRelatoModal"; // ✅ Modal importado

export default function Relatos() {
  const { t, i18n } = useTranslation();
  if (!i18n.isInitialized) return null;

  const relatos = t("relatos.items", { returnObjects: true }) as {
    quote: string;
    name: string;
    designation: string;
    src: string;
  }[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Cabecalho />

      {/* Conteúdo com fundo cinza */}
      <Container size="lg" className="py-16 flex-1">
        <div className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-8 md:p-12 shadow-md">
          <AnimatedTestimonials testimonials={relatos} />

          {/* Botão para abrir o modal */}
          <div className="mt-0.5 text-center">
            <ConteSeuRelatoModal />
          </div>
        </div>
      </Container>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
}
