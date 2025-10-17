# Component Library Starter

A production-ready React + TypeScript component library starter with Vite, Tailwind CSS, and a custom demo viewer.

## Features

- **React 18** + **TypeScript** with strict mode enabled
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom design tokens ready
- **shadcn/ui** infrastructure (utilities and configuration)
- **Custom Demo Viewer** with sidebar navigation (no Storybook needed)
- **Organized folder structure** for scalable component library development

## Project Structure

```
src/
├── foundations/           # Design tokens and foundations
│   ├── colors/           # Color palette definitions
│   ├── typography/       # Typography system
│   ├── spacing/          # Spacing scale
│   ├── icons/            # Icon system
│   └── logos/            # Logo assets
├── components/           # Component library
│   ├── ui/              # shadcn/ui components (add via CLI)
│   ├── buttons/         # Button components
│   ├── dropdowns/       # Dropdown components
│   └── ...              # Add more component categories
├── layouts/             # Layout components
├── demo/                # Demo viewer application
│   ├── ComponentViewer.tsx  # Main viewer component
│   └── routes.tsx           # Component routes and demos
└── lib/                 # Utilities
    └── utils.ts         # cn() utility for class merging
```

## Getting Started

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd component-library-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Adding New Components

### 1. Create a Component

Create your component in the appropriate directory:

```tsx
// src/components/buttons/MyButton.tsx
import { cn } from '@/lib/utils'

interface MyButtonProps {
  children: React.ReactNode
  className?: string
}

export function MyButton({ children, className }: MyButtonProps) {
  return (
    <button className={cn('px-4 py-2 rounded', className)}>
      {children}
    </button>
  )
}
```

### 2. Export the Component

```tsx
// src/components/buttons/index.ts
export { MyButton } from './MyButton'
```

### 3. Add to Demo Viewer

Add a demo component and route in `src/demo/routes.tsx`:

```tsx
function MyButtonDemo() {
  return (
    <div>
      <MyButton>Click me</MyButton>
    </div>
  )
}

export const componentRoutes: ComponentRoute[] = [
  // ... existing routes
  {
    id: 'my-button',
    name: 'My Button',
    category: 'Components',
    component: MyButtonDemo,
  },
]
```

## Using shadcn/ui Components

This project is configured to work with shadcn/ui. To add shadcn/ui components:

1. Add components using the shadcn CLI:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

Components will be added to `src/components/ui/`

## Customizing Design Tokens

### Colors

Edit `src/foundations/colors/index.ts` and `src/index.css` (CSS variables)

### Typography

Edit `src/foundations/typography/index.ts` and update Tailwind config if needed

### Spacing

Edit `src/foundations/spacing/index.ts`

### Tailwind Configuration

Customize `tailwind.config.js` to match your design system:

```js
export default {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
      fontFamily: {
        // Add custom fonts
      },
      // etc.
    },
  },
}
```

## TypeScript Configuration

This project uses strict TypeScript configuration for better type safety:

- `strict: true` - Enable all strict type checking options
- `noUnusedLocals: true` - Report errors on unused locals
- `noUnusedParameters: true` - Report errors on unused parameters
- Path aliases configured (`@/*` maps to `./src/*`)

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory. You can preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploy the `dist/` directory to your preferred hosting platform:

- **Vercel**: Connect your repo and deploy
- **Netlify**: Drag & drop the `dist/` folder or connect repo
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Any static host**: Upload the `dist/` folder

## Team Usage

### For Team Members

1. Clone the repository
2. Run `npm install`
3. Start developing with `npm run dev`
4. Add components following the structure above
5. View components in the demo viewer

### Best Practices

- Keep components small and focused
- Use TypeScript interfaces for props
- Export component types for consumers
- Add demo examples for each component
- Document component props and usage
- Follow the existing folder structure
- Use the `cn()` utility for conditional classes

## Demo Viewer

The custom demo viewer provides a simple way to view and test components without the overhead of Storybook:

- **Sidebar navigation** - Organized by category (Foundations, Components, etc.)
- **Live preview** - See components in action
- **Easy to extend** - Just add routes to `src/demo/routes.tsx`

## Roadmap

- [ ] Add more foundation components (icons, logos)
- [ ] Add form components
- [ ] Add navigation components
- [ ] Add feedback components (toast, alert, etc.)
- [ ] Add data display components (table, card, etc.)
- [ ] Set up component testing
- [ ] Add component documentation generator

## Contributing

1. Create a new branch for your feature
2. Add your components following the structure
3. Update this README if needed
4. Submit a pull request

## License

MIT
