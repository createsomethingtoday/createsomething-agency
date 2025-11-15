import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Contact | CREATE SOMETHING Agency' },
      { name: 'description', content: 'Ready to bring AI-native development to your organization? Let\'s discuss consulting, implementation, or training services. Contact us about your project.' },
      { name: 'keywords', content: 'contact, AI-native consulting, Claude Code services, development consulting, project inquiry, AI implementation' },

      // Open Graph
      { property: 'og:title', content: 'Contact | CREATE SOMETHING Agency' },
      { property: 'og:description', content: 'Let\'s discuss how we can help with your AI-native development needs.' },
      { property: 'og:url', content: 'https://createsomething.agency/contact' },

      // Twitter
      { name: 'twitter:title', content: 'Contact CREATE SOMETHING Agency' },
      { name: 'twitter:description', content: 'Get in touch about your project' },
    ],
    links: [
      { rel: 'canonical', href: 'https://createsomething.agency/contact' },
    ],
  }),
})

function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Let's Build Something
            </h1>

            <p className="text-lg text-white/70 leading-relaxed">
              Ready to bring AI-native development to your organization? Whether you need consulting, implementation, or training — let's talk about your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-[#111111] border border-white/10 rounded-lg hover:border-white/30 transition-all"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-white/60 mb-4">
                Project inquiries, service questions, or need a custom proposal? Send us a message.
              </p>
              <a
                href="mailto:micah@createsomething.io"
                className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                micah@createsomething.io
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-[#111111] border border-white/10 rounded-lg hover:border-white/30 transition-all"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Follow Updates</h3>
              <p className="text-white/60 mb-4">
                Stay updated with case studies, client results, and AI-native development insights.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/micahryanjohnson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/createsomethingtoday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
