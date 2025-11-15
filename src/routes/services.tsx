import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { CheckCircle, ArrowRight, Lightbulb, Code, GraduationCap } from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: 'Services | CREATE SOMETHING Agency' },
      { name: 'description', content: 'Consulting, implementation, and training services for AI-native development. Research-backed approaches applied to real business challenges.' },
      { name: 'keywords', content: 'AI-native consulting, Claude Code implementation, developer training, system architecture, Cloudflare Workers consulting' },

      // Open Graph
      { property: 'og:title', content: 'Services | CREATE SOMETHING Agency' },
      { property: 'og:description', content: 'Consulting, implementation, and training for AI-native development.' },
      { property: 'og:url', content: 'https://createsomething.agency/services' },
      { property: 'og:type', content: 'website' },

      // Twitter
      { name: 'twitter:title', content: 'Services | CREATE SOMETHING Agency' },
      { name: 'twitter:description', content: 'AI-native development services' },
    ],
    links: [
      { rel: 'canonical', href: 'https://createsomething.agency/services' },
    ],
  }),
})

function ServicesPage() {
  const services = [
    {
      id: 'consulting',
      icon: Lightbulb,
      title: 'Consulting',
      tagline: 'Strategic guidance for teams exploring AI-native development',
      description: 'Get expert guidance on adopting AI-native development practices. We assess your current state, identify opportunities, and create a roadmap for transformation based on proven methodologies.',
      features: [
        'Current state assessment and opportunity mapping',
        'AI-native development roadmap and strategy',
        'Architecture review and system design',
        'Team enablement and change management',
        'Tool and platform recommendations',
        'Success metrics and KPI definition',
      ],
      deliverables: [
        'Comprehensive assessment report',
        'Strategic roadmap document',
        'Architecture recommendations',
        'Implementation plan with milestones',
      ],
      pricing: 'Starting at $5,000',
      timeline: '2-4 weeks',
    },
    {
      id: 'implementation',
      icon: Code,
      title: 'Implementation',
      tagline: 'Full-stack development of AI-native systems',
      description: 'We build production-ready systems using Claude Code and Cloudflare Workers. Every project is tracked with real metrics (time, cost, errors) and delivered with complete documentation.',
      features: [
        'Production-ready system development',
        'Claude Code + Cloudflare Workers stack',
        'Tracked experiments with real metrics',
        'Complete technical documentation',
        'Testing and quality assurance',
        '30-day post-launch support',
      ],
      deliverables: [
        'Production-ready codebase',
        'Deployment and infrastructure setup',
        'Complete documentation',
        'Tracked metrics and learnings',
        'Knowledge transfer sessions',
      ],
      pricing: 'Starting at $15,000',
      timeline: '4-8 weeks',
    },
    {
      id: 'training',
      icon: GraduationCap,
      title: 'Training',
      tagline: 'Hands-on workshops for adopting AI-native workflows',
      description: 'Intensive training programs to get your team productive with AI-native development. Hands-on exercises, real code, and tracked experiments ensure practical learning.',
      features: [
        'Claude Code fundamentals and best practices',
        'Hands-on coding exercises with real projects',
        'Tracked experiment methodology',
        'Prompt engineering and AI collaboration',
        'Cloudflare Workers and edge computing',
        'Certification program for completion',
      ],
      deliverables: [
        'Custom training curriculum',
        'Hands-on workshop materials',
        'Code examples and templates',
        'Best practices guide',
        'Completion certificates',
      ],
      pricing: 'Starting at $8,000',
      timeline: '1-2 weeks',
    },
  ]

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
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              How We Work
            </h1>
            <p className="text-lg text-white/60">
              Three ways to bring AI-native development to your organization.
              Research-backed methodologies from{' '}
              <a href="https://createsomething.io" className="text-white hover:text-white/80 underline">
                createsomething.io
              </a>
              , applied to your business reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Description */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-xl text-white/70 mb-6">
                    {service.tagline}
                  </p>

                  <p className="text-white/60 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-2 gap-4 p-6 bg-[#111111] border border-white/10 rounded-lg">
                    <div>
                      <div className="text-white/40 text-sm mb-1">Starting Price</div>
                      <div className="text-white font-semibold">{service.pricing}</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-sm mb-1">Timeline</div>
                      <div className="text-white font-semibold">{service.timeline}</div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Features & Deliverables */}
                <div className="space-y-8">
                  {/* Features */}
                  <div className="p-8 bg-[#111111] border border-white/10 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="p-8 bg-[#111111] border border-white/10 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Deliverables
                    </h3>
                    <ul className="space-y-4">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-white/40 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-white/90 transition-all group"
                  >
                    Get Started with {service.title}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                  </a>
                </div>
              </div>

              {/* Divider (except for last item) */}
              {index < services.length - 1 && (
                <div className="mt-24 border-t border-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage
