import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date?: string; // Adicionando a propriedade opcional de data
}

export default function BlogCard({ title, excerpt, slug, image, date }: BlogCardProps) {
  return (
    <div className="relative group flex flex-col md:flex-row items-center md:items-center bg-[#111111] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:bg-[#1a1a1a] p-4">
      
      {/* Imagem - Mantendo posicionamento à esquerda */}
      <div className="w-full md:w-1/6 flex-shrink-0 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={80} // Tamanho menor para layout mais organizado
          height={60} 
          className="w-auto h-auto object-contain rounded-lg"
        />
      </div>

      {/* Texto - Ajustado ao lado direito */}
      <div className="w-full md:w-5/6 md:ml-4 flex flex-col justify-center">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-gray-400 text-sm mt-1">{excerpt}</p>

        <Link href={`/blog/${slug}`} className="mt-2">
          <span className="text-blue-400 text-sm hover:underline cursor-pointer">
            Leia mais →
          </span>
        </Link>
      </div>

      {/* Data da postagem - Fixa no canto inferior direito */}
      <div className="absolute bottom-2 right-2 text-xs text-gray-500">
        {date ? date : new Date().toLocaleDateString()} {/* Se não houver data, exibe a atual */}
      </div>
    </div>
  );
}
