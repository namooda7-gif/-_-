import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '라올실내건축 (Laol Interior Architecture)',
    short_name: 'LAOL',
    description: '여성의 체형과 동선에 완벽히 맞춰진 프리미엄 인테리어 설계 및 시공 서비스',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}
