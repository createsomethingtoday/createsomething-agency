import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/work')({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: 'Our Work | CREATE SOMETHING Agency' },
      { name: 'description', content: 'Real client projects applying AI-native development to business challenges. Case studies showing how research becomes production.' },
      { name: 'keywords', content: 'AI-native case studies, Claude Code projects, Cloudflare Workers implementations, client work, consulting projects' },

      // Open Graph
      { property: 'og:title', content: 'Our Work | CREATE SOMETHING Agency' },
      { property: 'og:description', content: 'Real client projects applying AI-native development to business challenges.' },
      { property: 'og:url', content: 'https://createsomething.agency/work' },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:title', content: 'Our Work | CREATE SOMETHING Agency' },
      { name: 'twitter:description', content: 'Real client projects with real results' },
    ],
    links: [
      { rel: 'canonical', href: 'https://createsomething.agency/work' },
    ],
  }),
})

function WorkPage() {
  // Case studies will be added as real client work is completed
  // Each will be derived from tracked experiments on createsomething.io

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Building in Public
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Case studies will be published here as real client work is completed.
              Each will be derived from tracked experiments on{' '}
              <a href="https://createsomething.io" className="text-white hover:text-white/80 underline">
                createsomething.io
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Link */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 bg-[#111111] border border-white/10 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              See Our Methodology
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Every project starts as a tracked experiment. View our research and development process at createsomething.io.
            </p>
            <a
              href="https://createsomething.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-all group"
            >
              View Experiments
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WorkPage
