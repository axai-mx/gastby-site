import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getBlogIndexConfig, getBlogsByLanguage, getLanguageConfig, getExcerpt } from '~/utils/content';

const languages = ['en', 'es'] as const;
type Language = (typeof languages)[number];

export function getStaticPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}

export async function GET(context: { params: { lang?: string }; site?: URL }) {
  const lang = (context.params.lang ?? 'en') as Language;

  if (!languages.includes(lang)) {
    return new Response('Not found', { status: 404 });
  }

  const [blogs, pages] = await Promise.all([
    getCollection('blog'),
    getCollection('pages'),
  ]);

  const blogIndex = getBlogIndexConfig(pages, lang);
  const languageConfig = getLanguageConfig(pages, lang);
  const posts = getBlogsByLanguage(blogs, lang);

  return rss({
    title: blogIndex?.data.title ?? `Axai blog (${lang})`,
    description: languageConfig?.data.description ?? blogIndex?.data.title ?? 'Axai blog feed',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: getExcerpt(post.body, 280),
      pubDate: new Date(post.data.date),
      link: post.data.permalink,
    })),
    customData: `<language>${lang === 'es' ? 'es-mx' : 'en-us'}</language>`,
  });
}
