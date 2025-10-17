# Quick Start Guide

Get up and running with the component library in minutes!

## 1. Install Dependencies

```bash
npm install
```

## 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 3. Explore the Demo Viewer

You'll see a demo viewer with:
- **Left Sidebar**: Navigate between components and foundations
- **Main Area**: View and interact with components

## 4. Add Your First Component

### Create the component file

```bash
# Create a new component directory
mkdir -p src/components/cards
```

Create `src/components/cards/Card.tsx`:

```tsx
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm p-6',
      className
    )}>
      {children}
    </div>
  )
}
```

### Export the component

Create `src/components/cards/index.ts`:

```tsx
export { Card } from './Card'
export type { CardProps } from './Card'
```

### Add to demo viewer

Update `src/demo/routes.tsx`:

```tsx
import { Card } from '@/components/cards'

function CardDemo() {
  return (
    <div className="space-y-4">
      <Card>
        <h3 className="font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This is a card component with some example content.
        </p>
      </Card>
    </div>
  )
}

// Add to componentRoutes array:
export const componentRoutes: ComponentRoute[] = [
  // ... existing routes
  {
    id: 'card',
    name: 'Card',
    category: 'Components',
    component: CardDemo,
  },
]
```

## 5. Using shadcn/ui Components

Add pre-built shadcn components:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

These will be added to `src/components/ui/`

## 6. Customize Design Tokens

### Update Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: 220 100% 50%;  /* Your brand color */
  --secondary: 210 40% 96.1%;
  /* ... more colors */
}
```

### Update Typography

Edit `src/foundations/typography/index.ts`:

```ts
export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',  // Your font
  },
  // ... more typography settings
}
```

### Update Tailwind Config

Edit `tailwind.config.js` for global design system changes.

## 7. Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 8. Preview Production Build

```bash
npm run preview
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure at a Glance

```
src/
├── foundations/      # Design tokens (colors, typography, spacing, etc.)
├── components/       # Your component library
│   ├── ui/          # shadcn/ui components
│   ├── buttons/     # Button components
│   └── ...          # More component categories
├── layouts/         # Layout components
├── demo/            # Demo viewer app
└── lib/             # Utility functions
```

## Next Steps

1. Read the full [README.md](./README.md) for detailed documentation
2. Explore existing components in the demo viewer
3. Start building your components following the patterns
4. Customize design tokens to match your brand
5. Share with your team and start collaborating!

## Need Help?

- Check the [README.md](./README.md) for detailed instructions
- Look at existing components for examples
- Refer to [Tailwind CSS docs](https://tailwindcss.com)
- Check [shadcn/ui docs](https://ui.shadcn.com) for component examples

Happy building! 🚀
