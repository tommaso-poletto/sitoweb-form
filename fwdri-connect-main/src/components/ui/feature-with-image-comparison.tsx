import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureImageComparisonProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  beforeImage?: string;
  afterImage?: string;
}

function FeatureImageComparison({
  badge = "Confronto",
  title = "Vedere la differenza",
  subtitle = "Trascina per vedere il prima e dopo",
  beforeImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
  afterImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
}: FeatureImageComparisonProps) {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-secondary/10 text-secondary border-secondary/30">
              {badge}
            </Badge>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
                {title}
              </h3>
              <p className="text-foreground-muted text-lg">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Image Comparison */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50">
            <div
              className="relative aspect-video w-full select-none cursor-ew-resize"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onMouseLeave={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              {/* Slider Handle */}
              <div
                className="absolute z-30 top-0 h-full w-1 bg-white/90 backdrop-blur-sm shadow-lg"
                style={{ left: `${inset}%`, transform: "translateX(-50%)" }}
              >
                <button
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize ring-2 ring-secondary/30 hover:ring-secondary/50 transition-all"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="w-5 h-5 text-foreground-muted" />
                </button>
              </div>

              {/* After Image (full) */}
              <img
                src={afterImage}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable={false}
              />

              {/* Before Image (clipped) */}
              <img
                src={beforeImage}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
                draggable={false}
              />

              {/* Labels */}
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                Prima
              </div>
              <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-foreground text-sm font-medium">
                Dopo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureImageComparison };
