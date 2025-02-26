import { Container, Title,  Text } from '@mantine/core';
import Area from '../template/comum/Area';

interface BlogPostProps {
  title: string;
  image: string;
  content: string;
}

export function BlogPost({ title, image, content }: BlogPostProps) {
  console.log("Imagem recebida no Post:", image); // 🔍 Verifica se a imagem está chegando corretamente

  return (
    <Area>
    <Container size="md">
      <Title order={1} mb="sm">{title}</Title>
      
   

      <Text size="md">{content}</Text>
    </Container>
    </Area> 
  );
}
