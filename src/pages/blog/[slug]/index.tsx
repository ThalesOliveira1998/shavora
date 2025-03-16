"use client";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import Cabecalho from "@/components/template/cabecalho";
import Rodape from "@/components/template/rodape";
import Area from "@/components/template/comum/Area";

function formatTextWithHighlight(text: string) {
  return text.split("\n").map((line, index) => (
    <p key={index} className="mb-4">
      {line.split(/(\*\*[^*]+\*\*)/g).map((segment, i) =>
        segment.match(/\*\*([^*]+)\*\*/) ? (
          <span key={i} className="text-blue-400 font-bold">
            {segment.replace(/\*\*/g, "")}
          </span>
        ) : (
          segment
        )
      )}
    </p>
  ));
}

export default function BlogPost() {
  const router = useRouter(); // ✅ Mova o hook para o topo!
  const { slug } = router.query;

  const { t, i18n } = useTranslation();
  if (!i18n.isInitialized) return null; // Agora sem hooks dentro da condição!

  const post = slug
    ? {
        title: t(`blog.posts.${slug}.title`),
        content: t(`blog.posts.${slug}.content`),
        image: `/images/${slug}.jpg`,
      }
    : null;

  if (!post || !post.title || post.title.includes("blog.posts")) {
    return (
      <div className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Cabecalho />
        <Area className="flex-1 flex items-center justify-center pb-24">
          <p className="text-white text-center text-lg">Post não encontrado.</p>
        </Area>
        <Rodape />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      <Cabecalho />

      <Area className="flex-1 pt-24 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* ✅ Botão de retorno ao Blog */}
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <FaArrowLeft className="text-blue-400" /> {t("blog.back")}
          </button>

          {/* ✅ Título com efeito de brilho */}
          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            {post.title}
          </h1>

          {/* ✅ Imagem com hover dinâmico */}
          <div className="mt-10 overflow-hidden rounded-xl shadow-lg group">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
            />
          </div>

          {/* ✅ Texto formatado com destaque em palavras dentro de ** ** */}
          <div className="mt-8 text-lg text-gray-300 leading-relaxed space-y-6">
            {formatTextWithHighlight(post.content)}
          </div>

          <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            <FaArrowLeft className="text-blue-400" /> {t("blog.back")}
          </button>
        </div>
      </Area>

      <Rodape />
    </div>
  );
}
