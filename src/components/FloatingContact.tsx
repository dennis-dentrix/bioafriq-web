import { useEffect, useRef, useState } from 'react'

const WHATSAPP_NUMBER = '254750885648'
const EMAIL = 'info@bioafriqenergy.com'
const PREFILL = 'Hi BioAfriq Energy, I would like to enquire about your dryers/services.'

function FloatingContact() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={rootRef} className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <div
        className={`flex flex-col gap-3 transition-all duration-200 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-white pl-4 pr-5 py-2.5 shadow-lg border border-stone-200 hover:border-leaf-300 transition-colors"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.483 1.34 4.997L2 22l5.116-1.342a9.96 9.96 0 004.888 1.245h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.071a9.933 9.933 0 00-7.072-2.832zm0 18.184h-.003a8.19 8.19 0 01-4.175-1.144l-.3-.178-3.037.797.81-2.96-.195-.304a8.176 8.176 0 01-1.256-4.398c0-4.523 3.68-8.203 8.204-8.203 2.19 0 4.249.854 5.798 2.404a8.146 8.146 0 012.401 5.804c0 4.524-3.68 8.182-8.247 8.182z" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-stone-800">WhatsApp us</span>
        </a>

        <a
          href={`mailto:${EMAIL}?subject=${encodeURIComponent('Enquiry from BioAfriq website')}`}
          className="flex items-center gap-3 rounded-full bg-white pl-4 pr-5 py-2.5 shadow-lg border border-stone-200 hover:border-leaf-300 transition-colors"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-600">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-white" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-stone-800">Email us</span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-flame-500 text-white shadow-xl hover:bg-flame-600 transition-all hover:scale-105 active:scale-95"
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-6 w-6 fill-none stroke-white transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          strokeWidth="2"
        >
          {open ? (
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            />
          )}
        </svg>
      </button>
    </div>
  )
}

export default FloatingContact
