"use client";

import BlogCard from "./BlogCard";
import { useTranslation } from "react-i18next";
import Cabecalho from "@/components/template/cabecalho";
import Rodape from "@/components/template/rodape";
import Area from "@/components/template/comum/Area";

function formatTextWithHighlight(text: string) {
  return text.split("\n").map((line, index) => (
    <p key={index} className="mb-2">
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

export default function Blog() {
  const { t, i18n } = useTranslation();
  if (!i18n.isInitialized) return null;

  const posts = [
    {
      slug: "primeiro-post",
      title: t("blog.posts.primeiro-post.title"),
      excerpt: t("blog.posts.primeiro-post.excerpt"),
      image: "/images/primeiro-post.jpg",
      date: "16/03/2025",
    },
    {
      slug: "desenvolvendo-intuicao",
      title: t("blog.posts.desenvolvendo-intuicao.title"),
      excerpt: t("blog.posts.desenvolvendo-intuicao.excerpt"),
      image: "/images/desenvolvendo-intuicao.jpg",
      date: "20/03/2025",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Cabecalho />

      <Area className="flex-1 px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-white">
          {t("blog.title")}
        </h1>

        {/* ✅ `blog.subtitle` com destaque */}
        <div className="mt-6 text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed tracking-wide">
  <span className="bg-gradient-to-r from-purple-900 via-indigo-500 to-purple-900 text-transparent bg-clip-text">
    {formatTextWithHighlight(t("blog.subtitle"))}
  </span>
</div>

        {/* ✅ Novo `blog.subtitle2` para continuar o conteúdo */}
        <div className="mt-4 text-lg text-gray-400 text-center max-w-3xl mx-auto">
          {formatTextWithHighlight(t("blog.subtitle2"))}
        </div>

        {/* Lista de posts */}
        <div className="flex flex-col gap-8 mt-10 max-w-2xl mx-auto">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              image={post.image}
              date={post.date}
            />
          ))}
        </div>
      </Area>

      <Rodape />
    </div>
  );
}
