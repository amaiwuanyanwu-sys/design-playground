import { Link } from 'react-router-dom'
import ParLogo from '@/assets/par-logo.svg'

interface PrototypeCard {
  id: string
  title: string
  description: string
  path: string
  previewImage?: string
}

const prototypes: PrototypeCard[] = [
  {
    id: 'component-viewer',
    title: 'PAR Component Library',
    description: 'Browse and explore the Practice Better component library and design system.',
    path: '/components',
    previewImage: ParLogo,
  },
]

const getPreviewColor = () => {
  return 'bg-brand-midnight'
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-slate-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="pb-header-2 text-brand-midnight mb-4">
            Design Playground
          </h1>
          <p className="pb-body-1-medium text-neutral-slate-700 max-w-2xl">
            A space for designers to build and test prototypes. Explore interactive experiences
            and design experiments for Practice Better.
          </p>
        </div>

        {/* Prototype Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prototypes.map((prototype, index) => (
            <Link
              key={prototype.id}
              to={prototype.path}
              className="block rounded-lg border border-neutral-slate-600 bg-neutral-white hover:border-brand-spring hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Preview Image */}
              {prototype.previewImage && (
                <div className={`${getPreviewColor(index)} p-8 flex items-center justify-center h-[140px]`}>
                  <img
                    src={prototype.previewImage}
                    alt={prototype.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <h2 className="pb-section-4-semibold text-foreground mb-2">
                  {prototype.title}
                </h2>
                <p className="pb-body-3-medium text-muted-foreground">
                  {prototype.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
