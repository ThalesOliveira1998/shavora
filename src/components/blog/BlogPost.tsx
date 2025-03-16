"use client";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Cabecalho from "@/components/template/cabecalho";
import Rodape from "@/components/template/rodape";
import Area from "@/components/template/comum/Area";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query; // 🔹 useRouter() deve ser chamado no topo

  const { t, i18n } = useTranslation();
  if (!i18n.isInitialized) return null; // ✅ Agora não há hooks dentro do bloco condicional

  const post = slug
    ? {
        title: t(`blog.posts.${slug}.title`),
        content: t(`blog.posts.${slug}.content`),
        image: `/images/${slug}.jpg`,
      }
    : null;

  if (!post || !post.title || post.title.includes("blog.posts")) {
    return <p className="text-white text-center">Post não encontrado.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Cabecalho />

      <Area className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {post.title}
          </h1>

          <img
            src={post.image}
            alt={post.title}
            className="w-full mt-8 rounded-lg shadow-lg"
          />

          <div className="mt-6 text-lg text-gray-300 leading-relaxed">
            {post.content.split("\n").map((line, index) => (
              <p key={index} className="mb-4">{line}</p>
            ))}
          </div>
        </div>
      </Area>

      <Rodape />
    </div>
  );
}
