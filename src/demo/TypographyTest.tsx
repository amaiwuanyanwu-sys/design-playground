/**
 * Test component to verify typography utilities are working
 */
export function TypographyTest() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-6">Typography Test</h2>

      {/* Font Family Test */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Font Family</h3>
        <p className="text-base">Default text (should be Inter)</p>
        <p className="text-base font-sans">Explicit font-sans (Inter)</p>
        <p className="text-base font-primary">Explicit font-primary (Inter)</p>
        <p className="text-base font-mono">Font-mono (Menlo)</p>
      </div>

      {/* Font Weights Test */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Font Weights</h3>
        <p className="text-base font-normal">font-normal (400)</p>
        <p className="text-base font-medium">font-medium (500)</p>
        <p className="text-base font-semibold">font-semibold (600)</p>
        <p className="text-base font-bold">font-bold (700)</p>
        <p className="text-base font-extrabold">font-extrabold (800)</p>
      </div>

      {/* Font Sizes Test */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Font Sizes</h3>
        <p className="text-xs">text-xs (12px)</p>
        <p className="text-sm">text-sm (14px)</p>
        <p className="text-base">text-base (16px)</p>
        <p className="text-lg">text-lg (18px)</p>
        <p className="text-xl">text-xl (20px)</p>
        <p className="text-2xl">text-2xl (24px)</p>
        <p className="text-3xl">text-3xl (30px)</p>
        <p className="text-4xl">text-4xl (36px)</p>
      </div>

      {/* Using Design System Text Styles */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Design System Text Styles</h3>
        <div className="space-y-4">
          <div>
            <h1 className="pb-header-1">Page Header 1</h1>
            <p className="text-xs text-muted-foreground">className="pb-header-1"</p>
          </div>
          <div>
            <h2 className="pb-header-2">Page Header 2</h2>
            <p className="text-xs text-muted-foreground">className="pb-header-2"</p>
          </div>
          <div>
            <p className="pb-section-1-semibold">Section Header 1 Semibold</p>
            <p className="text-xs text-muted-foreground">className="pb-section-1-semibold"</p>
          </div>
          <div>
            <p className="pb-section-2-medium">Section Header 2 Medium</p>
            <p className="text-xs text-muted-foreground">className="pb-section-2-medium"</p>
          </div>
          <div>
            <p className="pb-body-2-semibold">Body text semibold (most common body text)</p>
            <p className="text-xs text-muted-foreground">className="pb-body-2-semibold"</p>
          </div>
          <div>
            <p className="pb-body-2-medium">Body text medium</p>
            <p className="text-xs text-muted-foreground">className="pb-body-2-medium"</p>
          </div>
          <div>
            <p className="pb-small-medium">Small text for captions or metadata</p>
            <p className="text-xs text-muted-foreground">className="pb-small-medium"</p>
          </div>
          <div>
            <p className="pb-label">FIELD LABEL</p>
            <p className="text-xs text-muted-foreground">className="pb-label"</p>
          </div>
        </div>
      </div>

      {/* With Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Typography with Brand Colors</h3>
        <div className="space-y-2">
          <p className="text-base font-medium text-brand-primary">Primary brand text</p>
          <p className="text-base font-medium text-brand-grass">Grass brand text</p>
          <p className="text-base font-medium text-ui-success">Success text</p>
          <p className="text-base font-medium text-ui-error">Error text</p>
          <p className="text-base font-medium text-ui-warning">Warning text</p>
        </div>
      </div>
    </div>
  )
}
