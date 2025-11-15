# CREATE SOMETHING Agency

**The Practice Layer** — AI-native development professional services. Research from createsomething.io applied to real business challenges.

Built with TanStack Start and Cloudflare Workers.

![Create Something](https://img.shields.io/badge/TanStack-Start-red) ![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-orange) ![Tailwind](https://img.shields.io/badge/Tailwind-v4.1.17-blue)

## What This Is

This is the professional services layer of the CREATE SOMETHING ecosystem. We take the patterns and learnings from [createsomething.io](https://createsomething.io) research and apply them to real client work.

No hand-waving. No consulting theater. Just proven patterns applied to your business.

## The Hermeneutic Circle

This repository is part of a three-domain architecture based on Heidegger's hermeneutic circle:

- **[createsomething.io](https://createsomething.io)** → Research & Experiments
- **[createsomething.agency](https://createsomething.agency)** (this repo) → Professional Services
- **[createsomething.space](https://createsomething.space)** → Community Playground

Client work informs research. Research informs client work. The circle accelerates value delivery.

## Services

### Consulting

Strategic guidance on AI-native development:
- Architecture design informed by 100+ tracked experiments
- Pattern selection based on real metrics
- Cost modeling from actual usage data
- Risk mitigation from documented failure modes

### Implementation

Hands-on delivery applying proven patterns:
- Full-stack development with TanStack Start + Cloudflare
- AI-assisted development with Claude Code
- Edge-first architecture on Cloudflare Workers
- Tracked metrics throughout delivery

### Training

Team enablement with real-world data:
- AI-native development practices
- Pattern recognition from experiment archive
- Tooling and workflow optimization
- Metrics-driven decision making

## Features

- 📊 **Case Studies** — Real client work with metrics and learnings
- 🎯 **Proven Patterns** — Tested across 100+ experiments
- ⚡ **Fast Delivery** — Edge-first architecture, global deployment
- 📈 **Transparent Metrics** — Real data from actual projects
- 🔄 **Continuous Learning** — Findings feed back to .io research
- 🎨 **Modern Stack** — TanStack Start, Cloudflare, TypeScript

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Deploy to Cloudflare
pnpm deploy
```

Visit **http://localhost:3000** to browse case studies.

## Project Structure

```
createsomething-agency/
├── src/
│   ├── routes/
│   │   ├── index.tsx           # Services homepage
│   │   ├── about.tsx           # About & methodology
│   │   ├── contact.tsx         # Contact form
│   │   └── papers/$slug.tsx    # Case studies
│   ├── components/
│   │   ├── PapersGrid.tsx      # Case study browsing
│   │   └── Footer.tsx          # Service links
│   └── services/
│       └── ascii-generator.ts  # Visual generation
├── db/
│   ├── schema.sql              # Case study database schema
│   └── seed-data.sql           # Client work data
└── docs/
    ├── AGENCY_SPECIFICATION.md
    └── THREE_DOMAIN_ARCHITECTURE.md
```

## Tech Stack

- **TanStack Start v1.136** — Full-stack React framework
- **Cloudflare Workers** — Edge deployment
- **Cloudflare D1** — SQLite database (shared across all domains)
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling

## How We Work

Every engagement follows a research-informed process:

1. **Discovery** — Understand your challenges through the lens of our experiments
2. **Pattern Selection** — Choose proven approaches from the research archive
3. **Implementation** — Build with AI-native tools, track metrics
4. **Delivery** — Ship to production, measure outcomes
5. **Documentation** — Case study published (with your permission)

Client learnings feed back into [createsomething.io](https://createsomething.io) research.

## Engagement Models

- **Advisory** — Strategic consulting on AI-native development
- **Delivery** — Full implementation from design through deployment
- **Training** — Team enablement with proven patterns
- **Retainer** — Ongoing support and optimization

## Contact

Interested in working together?

→ Visit **[createsomething.agency/contact](https://createsomething.agency/contact)**

or open an issue with your use case.

## The Knowledge Layer

Want to see the research backing these services?

→ **[createsomething.io](https://createsomething.io)** — 100+ tracked experiments with real metrics.

## The Experimental Layer

Want to prototype ideas before engaging?

→ **[createsomething.space](https://createsomething.space)** — Fork experiments and test approaches.

## License

MIT License - See [LICENSE](./LICENSE) for details

---

**Built with TanStack Start and Cloudflare Workers**

For inquiries: [open an issue](https://github.com/createsomethingtoday/createsomething-agency/issues)
