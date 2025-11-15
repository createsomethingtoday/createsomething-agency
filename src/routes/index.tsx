import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { ArrowRight, CheckCircle, Zap, Target } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'CREATE SOMETHING Agency | AI-Native Development Services' },
      { name: 'description', content: 'Professional services applying AI-native development to real business challenges. The research from createsomething.io, applied to your reality.' },
      { name: 'keywords', content: 'AI-native development, Claude Code consulting, Cloudflare Workers, AI development services, system architecture' },

      // Open Graph
      { property: 'og:title', content: 'CREATE SOMETHING Agency | AI-Native Development Services' },
      { property: 'og:description', content: 'The research from createsomething.io, applied to your business reality.' },
      { property: 'og:url', content: 'https://createsomething.agency' },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:title', content: 'CREATE SOMETHING Agency' },
      { name: 'twitter:description', content: 'AI-native development services backed by research' },
    ],
    links: [
      { rel: 'canonical', href: 'https://createsomething.agency' },
    ],
  }),
})

function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We build AI-native<br />systems that work
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              The research from <a href="https://createsomething.io" className="text-white hover:text-white/80 underline">createsomething.io</a>.
              <br />Applied to your business reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/work"
                className="group px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#111111] border border-white/10 rounded-lg"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Research-Backed
              </h3>
              <p className="text-white/60 leading-relaxed">
                Every methodology we apply is validated through tracked experiments. No guesswork—just proven approaches with real metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-[#111111] border border-white/10 rounded-lg"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Results-Oriented
              </h3>
              <p className="text-white/60 leading-relaxed">
                We track time, costs, and errors on every project. Transparent metrics mean you know exactly what you're getting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-[#111111] border border-white/10 rounded-lg"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Production-Ready
              </h3>
              <p className="text-white/60 leading-relaxed">
                Built on Cloudflare's edge infrastructure with Claude Code. Modern stack, proven reliability, scalable from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Three ways to bring AI-native development to your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Consulting',
                description: 'Strategic guidance for teams exploring AI-native development',
                features: [
                  'Assessment & roadmap',
                  'Methodology training',
                  'Architecture review',
                  'Team enablement',
                ],
                cta: 'Learn More',
                href: '/services#consulting',
              },
              {
                title: 'Implementation',
                description: 'Full-stack development of AI-native systems',
                features: [
                  'Production-ready builds',
                  'Claude Code + Cloudflare',
                  'Complete documentation',
                  '30-day support',
                ],
                cta: 'Learn More',
                href: '/services#implementation',
              },
              {
                title: 'Training',
                description: 'Hands-on workshops for adopting AI-native workflows',
                features: [
                  'Claude Code fundamentals',
                  'Tracked experiments',
                  'Best practices',
                  'Certification program',
                ],
                cta: 'Learn More',
                href: '/services#training',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-[#111111] border border-white/10 rounded-lg hover:border-white/30 transition-all"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="text-white hover:text-white/80 font-medium inline-flex items-center gap-2 group"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
