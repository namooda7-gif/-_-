import { MetadataRoute } from 'next'
import { interiorStyles } from '@/data/styles'

const BASE_URL = 'https://laol.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes = ['', '/about', '/services', '/styles', '/portfolio', '/contact']

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const stylePages: MetadataRoute.Sitemap = interiorStyles.map((style) => ({
    url: `${BASE_URL}/styles/${style.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const legalRoutes = ['/terms', '/privacy']
  const legalPages: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.3,
  }))

  return [...staticPages, ...stylePages, ...legalPages]
}
