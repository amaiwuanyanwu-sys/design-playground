import { useState } from 'react'
import { cn } from '@/lib/utils'
import ParLogo from '@/assets/par-logo.svg'

export interface ComponentRoute {
  id: string
  name: string
  category: string
  component: React.ComponentType
}

interface ComponentViewerProps {
  routes: ComponentRoute[]
}

export function ComponentViewer({ routes }: ComponentViewerProps) {
  const [selectedId, setSelectedId] = useState(routes[0]?.id)

  const selectedRoute = routes.find(route => route.id === selectedId)
  const SelectedComponent = selectedRoute?.component

  // Group routes by category
  const categories = routes.reduce((acc, route) => {
    if (!acc[route.category]) {
      acc[route.category] = []
    }
    acc[route.category].push(route)
    return acc
  }, {} as Record<string, ComponentRoute[]>)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-brand-midnight">
        <div className="p-6 border-b border-neutral-slate-800">
          <img src={ParLogo} alt="Practice Better" className="w-full h-auto" />
        </div>
        <nav className="p-4">
          {Object.entries(categories).map(([category, categoryRoutes]) => (
            <div key={category} className="mb-6">
              <h2 className="text-xs font-semibold uppercase text-neutral-slate-400 mb-2 px-2">
                {category}
              </h2>
              <ul className="space-y-1">
                {categoryRoutes.map(route => (
                  <li key={route.id}>
                    <button
                      onClick={() => setSelectedId(route.id)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-md text-sm transition-colors',
                        selectedId === route.id
                          ? 'bg-ui-action text-neutral-white font-bold'
                          : 'text-neutral-slate-100 hover:bg-neutral-slate-800'
                      )}
                    >
                      {route.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground">
              {selectedRoute?.name}
            </h2>
            <p className="text-muted-foreground mt-1">
              Category: {selectedRoute?.category}
            </p>
          </div>

          <div>
            {SelectedComponent && <SelectedComponent />}
          </div>
        </div>
      </main>
    </div>
  )
}
