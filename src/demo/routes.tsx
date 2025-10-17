import type { ComponentRoute } from './ComponentViewer'
import { Button } from '@/components/ui/button'
import figmaColors from '@/foundations/colors/figma-colors.json'
import { TypographyTest } from './TypographyTest'
import { ButtonDemo as ButtonDemoComponent } from './ButtonDemo'

function ColorsDemo() {
  const isLightColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.7
  }

  const getColorClass = (category: string, name: string, shade?: string) => {
    if (category === 'brand') return `bg-brand-${name}`
    if (category === 'brandShades') return `bg-brandShades-${name}-${shade}`
    if (category === 'neutral') {
      if (name === 'white') return `bg-neutral-${name}`
      return `bg-neutral-slate-${shade}`
    }
    if (category === 'ui') {
      if (shade) return `bg-ui-${name}-${shade}`
      return `bg-ui-${name}`
    }
    if (category === 'tertiary') return `bg-tertiary-${name}-${shade}`
    return ''
  }

  return (
    <div className="divide-y divide-border space-y-8">
      {/* Brand Colors */}
      <div className="pt-8 first:pt-0">
        <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(figmaColors.brand).map(([name, color]) => (
            <div key={name}>
              <div
                className={`h-20 rounded-lg mb-2 ${isLightColor(color) ? 'border border-border' : ''}`}
                style={{ backgroundColor: color }}
              />
              <p className="text-sm font-medium capitalize">{name}</p>
              <p className="text-xs text-muted-foreground font-mono">{color}</p>
              <p className="text-xs text-muted-foreground font-mono">{getColorClass('brand', name)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Shades */}
      <div className="pt-8">
        <h3 className="text-lg font-semibold mb-4">Brand Shades</h3>
        {Object.entries(figmaColors.brandShades).map(([colorName, shades]) => (
          <div key={colorName} className="mb-6">
            <p className="text-sm font-medium capitalize mb-3">{colorName}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {Object.entries(shades).map(([shade, color]) => (
                <div key={shade}>
                  <div
                    className={`h-16 rounded-lg mb-2 ${isLightColor(color) ? 'border border-border' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-medium">{shade}</p>
                  <p className="text-xs text-muted-foreground font-mono">{color}</p>
                  <p className="text-xs text-muted-foreground font-mono">{getColorClass('brandShades', colorName, shade)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Neutrals */}
      <div className="pt-8">
        <h3 className="text-lg font-semibold mb-4">Neutrals</h3>
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">White</p>
          <div className="w-32">
            <div className="h-16 rounded-lg mb-2 border border-border" style={{ backgroundColor: figmaColors.neutrals.white }} />
            <p className="text-xs font-medium">White</p>
            <p className="text-xs text-muted-foreground font-mono">{figmaColors.neutrals.white}</p>
            <p className="text-xs text-muted-foreground font-mono">bg-neutral-white</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-3">Slate Scale</p>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {Object.entries(figmaColors.neutrals.slate).map(([shade, color]) => (
              <div key={shade}>
                <div
                  className={`h-16 rounded-lg mb-2 ${isLightColor(color) ? 'border border-border' : ''}`}
                  style={{ backgroundColor: color }}
                />
                <p className="text-xs font-medium">{shade}</p>
                <p className="text-xs text-muted-foreground font-mono">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UI Colors */}
      <div className="pt-8">
        <h3 className="text-lg font-semibold mb-4">UI Colors</h3>
        <div className="space-y-6">
          {Object.entries(figmaColors.ui).map(([name, value]) => (
            <div key={name}>
              <p className="text-sm font-medium capitalize mb-3">{name}</p>
              {typeof value === 'string' ? (
                <div className="w-32">
                  <div
                    className={`h-16 rounded-lg mb-2 ${isLightColor(value) ? 'border border-border' : ''}`}
                    style={{ backgroundColor: value }}
                  />
                  <p className="text-xs text-muted-foreground font-mono">{value}</p>
                  <p className="text-xs text-muted-foreground font-mono">{getColorClass('ui', name)}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {Object.entries(value).map(([shade, color]) => (
                    <div key={shade}>
                      <div
                        className={`h-16 rounded-lg mb-2 ${isLightColor(color) ? 'border border-border' : ''}`}
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-xs font-medium">{shade === 'DEFAULT' ? 'Default' : shade}</p>
                      <p className="text-xs text-muted-foreground font-mono">{color}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tertiary/Extended Palette */}
      <div className="pt-8">
        <h3 className="text-lg font-semibold mb-4">Extended Palette</h3>
        <p className="text-sm text-muted-foreground mb-4">10 color scales with shades from 50-900</p>
        {Object.entries(figmaColors.tertiary).map(([colorName, shades]) => (
          <div key={colorName} className="mb-6">
            <p className="text-sm font-medium capitalize mb-3">{colorName}</p>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
              {Object.entries(shades).map(([shade, color]) => (
                <div key={shade}>
                  <div
                    className={`h-16 rounded-lg mb-2 ${isLightColor(color) ? 'border border-border' : ''}`}
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-medium">{shade}</p>
                  <p className="text-xs text-muted-foreground font-mono">{color}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TypographyDemo() {
  return (
    <div className="divide-y divide-border space-y-12">
      {/* Page Headers */}
      <div className="pt-12 first:pt-0">
        <h3 className="text-lg font-semibold mb-6">Page Headers (Marketing)</h3>
        <div className="space-y-6">
          <div>
            <h1 style={{ fontSize: '76px', fontWeight: 800, lineHeight: '79.8px', fontFamily: 'Inter' }}>
              Page Header 1
            </h1>
            <p className="text-sm text-muted-foreground mt-2">76px / 800 / 79.8px line-height</p>
          </div>
          <div>
            <h2 style={{ fontSize: '56px', fontWeight: 800, lineHeight: '58.8px', fontFamily: 'Inter' }}>
              Page Header 2
            </h2>
            <p className="text-sm text-muted-foreground mt-2">56px / 800 / 58.8px line-height</p>
          </div>
          <div>
            <h3 style={{ fontSize: '42px', fontWeight: 700, lineHeight: '46.2px', fontFamily: 'Inter' }}>
              Page Header 3
            </h3>
            <p className="text-sm text-muted-foreground mt-2">42px / 700 / 46.2px line-height</p>
          </div>
          <div>
            <h4 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '35.2px', fontFamily: 'Inter' }}>
              Page Header 4
            </h4>
            <p className="text-sm text-muted-foreground mt-2">32px / 700 / 35.2px line-height</p>
          </div>
          <div>
            <h5 style={{ fontSize: '24px', fontWeight: 700, lineHeight: '28.8px', fontFamily: 'Inter' }}>
              Page Header 5
            </h5>
            <p className="text-sm text-muted-foreground mt-2">24px / 700 / 28.8px line-height</p>
          </div>
          <div>
            <h6 style={{ fontSize: '18px', fontWeight: 700, lineHeight: '21.6px', fontFamily: 'Inter' }}>
              Page Header 6
            </h6>
            <p className="text-sm text-muted-foreground mt-2">18px / 700 / 21.6px line-height</p>
          </div>
        </div>
      </div>

      {/* Section Headers */}
      <div className="pt-12">
        <h3 className="text-lg font-semibold mb-6">Section Headers (Sub-headers)</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '32px', fontWeight: 600, lineHeight: '38.4px', fontFamily: 'Inter' }}>
                Section Header 1 (Semibold)
              </p>
              <p className="text-xs text-muted-foreground mt-1">32px / 600 / 38.4px</p>
            </div>
            <div>
              <p style={{ fontSize: '32px', fontWeight: 500, lineHeight: '38.4px', fontFamily: 'Inter' }}>
                Section Header 1 (Medium)
              </p>
              <p className="text-xs text-muted-foreground mt-1">32px / 500 / 38.4px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '24px', fontWeight: 600, lineHeight: '28.8px', fontFamily: 'Inter' }}>
                Section Header 2 (Semibold)
              </p>
              <p className="text-xs text-muted-foreground mt-1">24px / 600 / 28.8px</p>
            </div>
            <div>
              <p style={{ fontSize: '24px', fontWeight: 500, lineHeight: '28.8px', fontFamily: 'Inter' }}>
                Section Header 2 (Medium)
              </p>
              <p className="text-xs text-muted-foreground mt-1">24px / 500 / 28.8px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '22px', fontWeight: 600, lineHeight: '28.6px', fontFamily: 'Inter' }}>
                Section Header 3 (Semibold)
              </p>
              <p className="text-xs text-muted-foreground mt-1">22px / 600 / 28.6px</p>
            </div>
            <div>
              <p style={{ fontSize: '22px', fontWeight: 500, lineHeight: '28.6px', fontFamily: 'Inter' }}>
                Section Header 3 (Medium)
              </p>
              <p className="text-xs text-muted-foreground mt-1">22px / 500 / 28.6px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '20px', fontWeight: 600, lineHeight: '26px', fontFamily: 'Inter' }}>
                Section Header 4 (Semibold)
              </p>
              <p className="text-xs text-muted-foreground mt-1">20px / 600 / 26px</p>
            </div>
            <div>
              <p style={{ fontSize: '20px', fontWeight: 500, lineHeight: '26px', fontFamily: 'Inter' }}>
                Section Header 4 (Medium)
              </p>
              <p className="text-xs text-muted-foreground mt-1">20px / 500 / 26px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '18px', fontWeight: 600, lineHeight: '23.4px', fontFamily: 'Inter' }}>
                Section Header 5 (Semibold)
              </p>
              <p className="text-xs text-muted-foreground mt-1">18px / 600 / 23.4px</p>
            </div>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '23.4px', fontFamily: 'Inter' }}>
                Section Header 5 (Medium)
              </p>
              <p className="text-xs text-muted-foreground mt-1">18px / 500 / 23.4px</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="pt-12">
        <h3 className="text-lg font-semibold mb-6">Body Text</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '18px', fontWeight: 600, lineHeight: '27.9px', fontFamily: 'Inter' }}>
                Paragraph 1 (Semibold): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">18px / 600 / 27.9px</p>
            </div>
            <div>
              <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '27.9px', fontFamily: 'Inter' }}>
                Paragraph 1 (Medium): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">18px / 500 / 27.9px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px', fontFamily: 'Inter' }}>
                Paragraph 2 (Semibold): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">16px / 600 / 24px - body text</p>
            </div>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 500, lineHeight: '24px', fontFamily: 'Inter' }}>
                Paragraph 2 (Medium): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">16px / 500 / 24px - body text</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '14px', fontWeight: 600, lineHeight: '19.6px', fontFamily: 'Inter' }}>
                Paragraph 3 (Semibold): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">14px / 600 / 19.6px</p>
            </div>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, lineHeight: '19.6px', fontFamily: 'Inter' }}>
                Paragraph 3 (Medium): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-muted-foreground mt-1">14px / 500 / 19.6px</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p style={{ fontSize: '12px', fontWeight: 600, lineHeight: '18px', fontFamily: 'Inter' }}>
                Small Text 1 (Semibold): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-xs text-muted-foreground mt-1">12px / 600 / 18px</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px', fontFamily: 'Inter' }}>
                Small Text 1 (Medium): Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-xs text-muted-foreground mt-1">12px / 500 / 18px</p>
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="pt-12">
        <h3 className="text-lg font-semibold mb-6">Labels (Information, Text Links)</h3>
        <div>
          <p style={{ fontSize: '12px', fontWeight: 600, lineHeight: '12px', fontFamily: 'Inter' }}>
            Field Label 1
          </p>
          <p className="text-xs text-muted-foreground mt-1">12px / 600 / 12px</p>
        </div>
      </div>

      {/* Font Family */}
      <div className="pt-12">
        <h3 className="text-lg font-semibold mb-6">Font Family</h3>
        <div className="space-y-2">
          <p className="text-base" style={{ fontFamily: 'Inter' }}>
            Primary: Inter (All text styles use Inter)
          </p>
          <p className="text-sm text-muted-foreground">
            Fallback: system-ui, -apple-system, sans-serif
          </p>
        </div>
      </div>
    </div>
  )
}

function SpacingDemo() {
  const spacingScale = [
    { value: '2px', scale: '0.125', name: 'spacing/0_125', px: 2 },
    { value: '4px', scale: '0.25', name: 'spacing/0_25', px: 4 },
    { value: '8px', scale: '0.5', name: 'spacing/0_5', px: 8 },
    { value: '12px', scale: '0.75', name: 'spacing/0_75', px: 12 },
    { value: '16px', scale: '1', name: 'spacing/1', px: 16, isBase: true },
    { value: '24px', scale: '1.5', name: 'spacing/1_5', px: 24 },
    { value: '32px', scale: '2', name: 'spacing/2', px: 32 },
    { value: '48px', scale: '3', name: 'spacing/3', px: 48 },
    { value: '64px', scale: '4', name: 'spacing/4', px: 64 },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-6">Spacing Scale</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Base unit: 16px (scale: 1). All spacing follows a consistent scale based on this foundation.
        </p>

        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 pb-2 border-b border-border">
            <div className="text-sm font-semibold bg-bran">Value</div>
            <div className="text-sm font-semibold team">Scale</div>
            <div className="text-sm font-semibold">Name (in dev mode)</div>
            <div className="text-sm font-semibold">Visual</div>
          </div>

          {/* Spacing Items */}
          {spacingScale.map(({ value, scale, name, px, isBase }) => (
            <div
              key={scale}
              className={`grid grid-cols-4 gap-4 items-center py-2 ${isBase ? 'bg-brand-creamsicle/10 -mx-4 px-4 rounded' : ''}`}
            >
              <div className={`text-base ${isBase ? 'text-brand-creamsicle font-semibold' : ''}`}>
                {value}
              </div>
              <div className={`text-base ${isBase ? 'text-brand-creamsicle font-semibold' : ''}`}>
                {scale}
              </div>
              <div className={`text-base font-mono text-sm ${isBase ? 'text-brand-creamsicle font-semibold' : 'text-muted-foreground'}`}>
                {name}
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-8 rounded-sm ${isBase ? 'bg-brand-creamsicle' : 'bg-foreground'}`}
                  style={{ width: `${px}px`, minWidth: `${px}px` }}
                />
                {isBase && (
                  <span className="text-xs text-brand-creamsicle font-semibold whitespace-nowrap">Base</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="pt-8 border-t border-border">
        <h3 className="text-lg font-semibold mb-6">Usage Examples</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium mb-3">Padding & Margins</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Tight (8px)', value: '8px' },
                { label: 'Base (16px)', value: '16px' },
                { label: 'Comfortable (24px)', value: '24px' },
              ].map(({ label, value }) => (
                <div key={label} className="border border-border rounded">
                  <div
                    className="bg-primary/10 flex items-center justify-center text-xs"
                    style={{ padding: value }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Gaps & Spacing</p>
            <div className="border border-border rounded p-4">
              <div className="flex items-center" style={{ gap: '8px' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center text-xs">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">Gap: 8px (scale 0.5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const componentRoutes: ComponentRoute[] = [
  {
    id: 'typography-test',
    name: 'Typography Test',
    category: 'Debug',
    component: TypographyTest,
  },
  {
    id: 'colors',
    name: 'Colors',
    category: 'Foundations',
    component: ColorsDemo,
  },
  {
    id: 'typography',
    name: 'Typography',
    category: 'Foundations',
    component: TypographyDemo,
  },
  {
    id: 'spacing',
    name: 'Spacing',
    category: 'Foundations',
    component: SpacingDemo,
  },
  {
    id: 'button',
    name: 'Button',
    category: 'Components',
    component: ButtonDemoComponent,
  },
]
