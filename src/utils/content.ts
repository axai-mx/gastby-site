// Content utilities for loading and organizing content
import { getCollection } from 'astro:content';

export function getConfigByLanguage(pages, language, type = 'language') {
  return pages.find(p => p.data.language === language && p.data.type === type);
}

export function getLanguageConfig(pages, language) {
  return pages.find(p => p.data.type === 'language' && p.data.language === language);
}

export function getBlogIndexConfig(pages, language) {
  return pages.find(p => p.data.type === 'blog-index' && p.data.language === language);
}

export function getBlogsByLanguage(blogs, language) {
  return blogs
    .filter(b => b.data.language === language)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getProjectsByLanguage(projects, language) {
  return projects
    .filter(p => p.data.language === language)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getPeopleByLanguage(people, language) {
  return people.filter(p => p.data.language === language);
}

export function getBlogsByUser(blogs, user) {
  return blogs
    .filter(b => b.data.user === user)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

// Generate date display matching Gatsby's formatString
export function formatDate(dateStr, language) {
  const date = new Date(dateStr);
  if (language === 'es') {
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}
