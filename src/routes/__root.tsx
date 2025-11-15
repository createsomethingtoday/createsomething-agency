import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import globalCss from '../global.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'CREATE SOMETHING Agency | The Practice Layer',
      },
      {
        name: 'description',
        content: 'AI-native development professional services. Research from createsomething.io applied to real business challenges. Consulting, implementation, and training backed by 100+ tracked experiments.',
      },
      {
        name: 'keywords',
        content: 'AI-native development services, Claude Code consulting, Cloudflare Workers implementation, AI development agency, professional services, implementation services, training services, case studies, proven patterns',
      },
      {
        name: 'author',
        content: 'Micah Johnson',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content: 'index, follow',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://createsomething.agency',
      },
      {
        property: 'og:title',
        content: 'CREATE SOMETHING Agency | The Practice Layer',
      },
      {
        property: 'og:description',
        content: 'AI-native development professional services. Research from createsomething.io applied to real business challenges.',
      },
      {
        property: 'og:image',
        content: 'https://createsomething.agency/og-image.svg',
      },
      {
        property: 'og:image:type',
        content: 'image/svg+xml',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:site_name',
        content: 'CREATE SOMETHING Agency',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: 'https://createsomething.agency',
      },
      {
        name: 'twitter:title',
        content: 'CREATE SOMETHING Agency | The Practice Layer',
      },
      {
        name: 'twitter:description',
        content: 'Professional services applying AI-native research to real business challenges.',
      },
      {
        name: 'twitter:image',
        content: 'https://createsomething.agency/og-image.svg',
      },
      {
        name: 'twitter:creator',
        content: '@micahryanjohnson',
      },
      // Additional SEO
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
      // AEO (Answer Engine Optimization) for AI/LLM queries
      {
        name: 'article:section',
        content: 'Professional Services, Consulting',
      },
      {
        name: 'article:tag',
        content: 'AI Development Services, Consulting, Implementation, Training, Case Studies',
      },
      {
        name: 'citation_title',
        content: 'CREATE SOMETHING Agency: AI-Native Development Professional Services',
      },
      {
        name: 'citation_author',
        content: 'Micah Johnson',
      },
      {
        name: 'citation_publication_date',
        content: '2025',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'canonical',
        href: 'https://createsomething.agency',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'CREATE SOMETHING Agency',
          alternateName: 'The Practice Layer',
          description: 'AI-native development professional services. Research from createsomething.io applied to real business challenges. Consulting, implementation, and training backed by 100+ tracked experiments.',
          url: 'https://createsomething.agency',
          inLanguage: 'en-US',
          serviceType: ['Consulting', 'Implementation', 'Training'],
          provider: {
            '@type': 'Person',
            name: 'Micah Johnson',
            url: 'https://www.linkedin.com/in/micahryanjohnson/',
            jobTitle: 'AI-Native Development Consultant',
          },
          areaServed: 'Worldwide',
          about: {
            '@type': 'Thing',
            name: 'AI-Native Development Services',
            description: 'Professional services for implementing AI-native development practices with proven patterns from research',
          },
          keywords: [
            'AI-native development services',
            'Claude Code consulting',
            'Cloudflare Workers implementation',
            'AI development consulting',
            'professional services',
            'case studies',
            'proven patterns',
          ],
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="page-transition">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
