import logo from '../assets/images/logo.png'

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bioafriq-energy' },
  { label: 'Facebook', href: 'https://www.facebook.com/bioafriqenergy/' },
]

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="BioAfriq Energy" className="h-8 w-auto" />
          <span className="text-sm font-semibold text-white">
            BioAfriq Energy
          </span>
        </div>

        <p className="text-xs text-center">
          © {new Date().getFullYear()} BioAfriq Energy Ltd. Machakos County, Kenya.
        </p>

        <ul className="flex gap-6 text-xs">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
