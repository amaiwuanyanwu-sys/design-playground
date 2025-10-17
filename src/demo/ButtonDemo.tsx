import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ChevronRight } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>

      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Button States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">
            <ArrowRight className="h-4 w-4 mr-1" />
            With Icon
          </Button>
          <Button variant="secondary">
            Download
            <Download className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
