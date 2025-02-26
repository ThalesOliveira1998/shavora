import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Container, Title, Image, Text } from '@mantine/core';
import Rodape from '@/components/template/rodape';
import Cabecalho from '@/components/template/cabecalho';

// 🔹 Definição do objeto com posts fictícios (pode ser substituído por uma API futuramente)
const blogPosts: Record<string, { title: string; image: string; content: string }> = {
  'como-criar-um-blog-nextjs-mantine': {
    title: 'Como criar um Blog com Next.js e Mantine UI',
    image: 'https://img.freepik.com/free-photo/ecology-fresh-lush-natural-nature_53876-120778.jpg?t=st=1740528654~exp=1740532254~hmac=f48868dee28d5134bb213b46db3ff03cb8b94883a5ee578b4ad70b91fd0bc3a6&w=740',
    content: 'Aqui está o conteúdo completo do post...',
  },
  'novidades-nextjs-14': {
    title: 'O que há de novo no Next.js 14?',
    image: 'https://source.unsplash.com/600x400/?technology',
    content: 'Explicamos toda da nova versão do Next.js...',
  },
};

export default function BlogPostPage({ post }: { post: { title: string; image: string; content: string } }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
            {/* Cabeçalho */}
            <Cabecalho />
    <Container size="md">
      <Title order={1} mb="sm">
        {post.title}
      </Title>
     
      
      {/* 🔹 Imagem com fallback para evitar erro caso a URL esteja errada */}
      <Image 
  src={post.image ? post.image : 'https://source.unsplash.com/600x400/?technology'} 
  alt={post.title} 
  radius="md" 
  mb="md" 
  height={300} 
  fit="cover" 
/>

      <Text size="md">{post.content}</Text>
      <Rodape/>
    </Container>
    </div>
   
  );
}

// 🔹 Gera as páginas estáticas no build
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(blogPosts).map((slug) => ({ params: { slug } })),
    fallback: false, // Define que se a página não existir, retorna 404
  };
};

// 🔹 Passa os dados do post como props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string; // 🔹 Garante que o slug é uma string
  const post = blogPosts[slug];

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};
