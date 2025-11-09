import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const VIMEO_EMBED_URL =
  'https://player.vimeo.com/video/1134924249?h=aa379b15e7&badge=0&autopause=0&player_id=0&app_id=58479'
const IMAGE_SRC = '/images/bob-1.jpg'
const IMAGE_ALT = "Bob gives a thumbs up from his favorite chair after moving into Mt. Carmel."

const PlayIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 48 48"
    className="h-12 w-12 text-slate-300 transition-colors duration-300 group-hover:text-white"
  >
    <path
      fill="currentColor"
      d="M19.5 15.3c0-1.5 1.6-2.4 2.9-1.6l11.8 7.2c1.2.7 1.2 2.5 0 3.2l-11.8 7.2c-1.3.8-2.9-.1-2.9-1.6V15.3z"
    />
  </svg>
)

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  ariaLabel: string
  children: ReactNode
}

type ModalVariant = 'image' | 'video' | null

const Modal = ({ isOpen, onClose, ariaLabel, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onClick={onClose}
        >
          <motion.div
            className="w-[90%] max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-midnight-800/90 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full">{children}</div>
            <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-midnight-900/80 px-6 py-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-white/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/80"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [activeModal, setActiveModal] = useState<ModalVariant>(null)

  const closeModal = () => setActiveModal(null)

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight-900 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden="true" />
      <div className="absolute -top-1/3 -right-1/4 h-[650px] w-[650px] rounded-full bg-cobalt-500/25 blur-[160px]" />
      <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-white/30 blur-[140px]" />

      <div className="relative flex min-h-screen items-center justify-center px-6 py-16 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <header className="mb-10 w-full max-w-lg text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300/80">
              Mt. Carmel welcomes
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Bob Corwin
            </h1>
          </header>

          <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start lg:justify-center">
            <div className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
              <button
                type="button"
                onClick={() => setActiveModal('image')}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/5 shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-300/80"
                aria-label="View Bob's welcome photo in full size"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-cobalt-400/25 opacity-20 transition-opacity duration-500 group-hover:opacity-40" />
                <img
                  src={IMAGE_SRC}
                  alt={IMAGE_ALT}
                  className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
              <p className="-mt-5 text-sm regularic text-slate-300">
                Bob gives a thumbs up to the female-to-male ratio<br /><i>—Judy isn&apos;t looking too worried</i>.
              </p>
            </div>

            <div className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-cobalt-400/45 bg-gradient-to-br from-cobalt-500/30 via-midnight-800/90 to-black/70 p-[1px] transition-transform duration-500 hover:-translate-y-1 hover:shadow-frost">
                <div className="relative flex h-full flex-col items-center justify-center gap-6 rounded-[calc(theme(borderRadius.3xl)-1px)] bg-midnight-800/85 px-8 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-cobalt-500/25 shadow-inner shadow-white/40 backdrop-blur-md transition-colors duration-300 group-hover:bg-cobalt-400/30">
                    <PlayIcon />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-white">Watch</h2>
                    <p className="text-sm text-slate-300">
                      Tap for a tour and Bob&apos;s first moments in Mt. Carmel
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModal('video')}
                    className="mx-auto flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt-300/80"
                  >
                    Play video
                  </button>
                  <p className="max-w-sm text-[0.7rem] text-slate-400">
                    By tapping play you agree to wish Bob a joyful welcome to his new digs.
                  </p>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/45 via-transparent to-white/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={activeModal === 'video'}
        onClose={closeModal}
        ariaLabel="Watch the move-in video"
      >
        <div className="relative aspect-video w-full bg-black">
          <iframe
            title="Bob's move-in at Mt. Carmel"
            src={VIMEO_EMBED_URL}
            allow="autoplay; fullscreen; picture-in-picture"
            className="h-full w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'image'}
        onClose={closeModal}
        ariaLabel="View Bob's welcome photo"
      >
        <div className="relative w-full overflow-hidden bg-black">
          <img src={IMAGE_SRC} alt={IMAGE_ALT} className="block w-full object-contain" loading="lazy" />
        </div>
      </Modal>
    </div>
  )
}

export default App
