import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
              CREATE SOMETHING
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <a
              href="https://createsomething.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Research
            </a>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="group relative px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                to="/work"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/services"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <a
                href="https://createsomething.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </a>
              <Link
                to="/contact"
                className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
