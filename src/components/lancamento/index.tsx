"use client";
import { motion } from "framer-motion";
import Area from "../template/comum/Area";
import { TFunction } from "i18next";

interface LancamentoProps {
  t: TFunction;
}

export default function Lancamento({ t }: LancamentoProps) {
  return (
    
      <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-12 px-6 md:px-16 text-zinc-100">
        <Area>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Imagem do single */}
          <motion.img
            src="/images/lancamento-mano-mano.jpg"
            alt={t("lancamento.imagemAlt")}
            className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="space-y-4"
          >
            <span className="text-sm uppercase tracking-widest text-rose-400 font-semibold">
              {t("lancamento.tag")}
            </span>

            <h2 className="text-3xl font-bold leading-tight text-emerald-300">
              {t("lancamento.titulo")}
            </h2>

            <p className="text-lg font-medium text-zinc-200">
              {t("lancamento.descricao")}
            </p>

            <p className="italic text-rose-300 font-semibold whitespace-pre-line">
              {t("lancamento.frasePoetica")}
            </p>

            <p className="text-sm text-zinc-300">
              {t("lancamento.infoEp")}{" "}
              <strong className="text-emerald-400">{t("lancamento.nomeEp")}</strong>
            </p>

            <a
              href={t("lancamento.link")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              {t("lancamento.botao")}
            </a>

            <div className="pt-2 text-sm text-zinc-400 italic">
              {t("lancamento.footer")}
            </div>
          </motion.div>
        </div>
        </Area>
      </section>
    
  );
}
