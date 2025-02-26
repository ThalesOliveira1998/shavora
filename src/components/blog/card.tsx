import { Card, Image, Text, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import Area from '../template/comum/Area';

interface BlogCardProps {
  title: string;
  image: string;
  summary: string;
  slug: string;
}

export function BlogCard({ title, image, summary, slug }: BlogCardProps) {
  const router = useRouter();

  console.log("Imagem recebida no Card:", image); // 🔍 Verifica se a imagem está chegando corretamente

  return (
    <Area>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image 
          src={ 'https://img.freepik.com/free-photo/young-lady-with-tablet-table-autumn-park_23-2147883225.jpg?t=st=1740528620~exp=1740532220~hmac=239f9bb8cd1af4ac179893602cdd1e22bb0ee9bd220a80fd1f654fde772f7361&w=1380'} 
          height={160} 
          alt={title} 
          fit="cover"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" color="dimmed">
        {summary}
      </Text>

      <Button fullWidth mt="md" onClick={() => router.push(`/blog/${slug}`)}>
        Ler mais
      </Button>
    </Card>
    </Area>
  );
}
