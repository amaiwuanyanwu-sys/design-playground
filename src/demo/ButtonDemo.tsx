import { Button } from "@/components/ui/button"
import { ArrowRight, Download, ChevronRight } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Basic Button</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Click Me</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Buttons with Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            <ArrowRight className="h-4 w-4 mr-1" />
            With Icon
          </Button>
          <Button>
            Download
            <Download className="h-4 w-4 ml-1" />
          </Button>
          <Button>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="pb-section-4-semibold text-foreground mb-4">Coming Soon</h3>
        <p className="text-sm text-muted-foreground">
          Variants, sizes, and full styling will be added step by step using PAR design system foundations.
        </p>
      </div>
    </div>
  )
}
