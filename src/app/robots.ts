import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://laol.kr/sitemap.xml',
    host: 'https://laol.kr',
  }
}
