import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const site = context.site || new URL('https://santohomobono.com.br');

  return rss({
    title: 'Santo Homobono — Blog e Formação para Empresários',
    description: 'Artigos sobre ética nos negócios, liderança cristã e a vida de Santo Homobono de Cremona.',
    site: site.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.publishDate),
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>pt-br</language>`,
  });
}
