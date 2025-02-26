import { Container, SimpleGrid, Title } from '@mantine/core';
import { BlogCard } from './card';
import Cabecalho from '../template/cabecalho';
import Rodape from '../template/rodape';
import Area from '../template/comum/Area';

// 🔹 Agora usamos imagens confiáveis do Unsplash
const blogPosts = [
  {
    title: 'Como criar um Blog com Next.js e Mantine UI',
    image: 'https://img.freepik.com/free-photo/ecology-fresh-lush-natural-nature_53876-120778.jpg?t=st=1740528654~exp=1740532254~hmac=f48868dee28d5134bb213b46db3ff03cb8b94883a5ee578b4ad70b91fd0bc3a6&w=740',
    summary: 'Aprenda a construir um blog moderno com Next.js e Mantine UI.',
    slug: 'como-criar-um-blog-nextjs-mantine',
  },
  {
    title: 'O que há de novo no Next.js 14?',
    image: 'https://source.unsplash.com/600x400/?technology',
    summary: 'Confira as novidades e melhorias da nova versão do Next.js.',
    slug: 'novidades-nextjs-14',
  },
];

export default function BlogPage() {
  return (
      <div className="flex flex-col min-h-screen">
            {/* Cabeçalho */}
            <Cabecalho />
     <Area>       
    <Container size="lg">
      <Title order={1} mb="lg">
        Blog
      </Title>

      <SimpleGrid cols={3} spacing="lg">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </SimpleGrid>
    </Container>
    <Rodape/>
    </Area>
    </div>

  );
}
