import { useState } from 'react'
import logo from '../assets/images/logo.png'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-leaf-900/10">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="BioAfriq Energy" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-stone-900">
            Bio<span className="text-leaf-700">Afriq</span> Energy
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-leaf-700 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-400 transition-colors"
        >
          Get a Dryer
        </a>

        <button
          type="button"
          className="md:hidden text-stone-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-leaf-900/10 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-stone-600">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-leaf-700">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2 font-semibold text-stone-900"
              >
                Get a Dryer
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
