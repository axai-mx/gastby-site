import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getBlogIndexConfig, getBlogsByLanguage, getLanguageConfig, getExcerpt } from '~/utils/content';

export async function GET(context: { site?: URL }) {
  const [blogs, pages] = await Promise.all([
    getCollection('blog'),
    getCollection('pages'),
  ]);

  const blogIndex = getBlogIndexConfig(pages, 'en');
  const languageConfig = getLanguageConfig(pages, 'en');
  const posts = getBlogsByLanguage(blogs, 'en');

  return rss({
    title: blogIndex?.data.title ?? 'Axai blog (en)',
    description: languageConfig?.data.description ?? blogIndex?.data.title ?? 'Axai blog feed',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: getExcerpt(post.body, 280),
      pubDate: new Date(post.data.date),
      link: post.data.permalink,
    })),
    customData: '<language>en-us</language>',
  });
}
