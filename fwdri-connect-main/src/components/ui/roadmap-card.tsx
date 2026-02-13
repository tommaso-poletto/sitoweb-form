"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
  title?: string;
  description?: string;
  items: RoadmapItem[];
  blurFromIndex?: number; // Index from which to start blurring items
}

const statusColors = {
  done: "bg-green-500",
  "in-progress": "bg-primary",
  upcoming: "bg-muted-foreground/30",
};

const statusBadgeVariants = {
  done: "bg-green-500/10 text-green-600 border-green-500/20",
  "in-progress": "bg-primary/10 text-primary border-primary/20",
  upcoming: "bg-muted text-muted-foreground border-muted-foreground/20",
};

export function RoadmapCard({
  title = "Product Roadmap",
  description = "Upcoming features and releases",
  items,
  blurFromIndex = -1,
}: RoadmapCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-muted-foreground/20" />

          <div className="space-y-8">
            {items.map((item, index) => {
              const shouldBlur = blurFromIndex >= 0 && index >= blurFromIndex;
              const blurIntensity = shouldBlur ? Math.min((index - blurFromIndex + 1) * 2, 8) : 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={cn(
                    "relative flex gap-6 items-start",
                    shouldBlur && "select-none"
                  )}
                  style={{
                    filter: shouldBlur ? `blur(${blurIntensity}px)` : undefined,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className={cn(
                        "w-11 h-11 rounded-full border-4 border-background flex items-center justify-center shadow-lg",
                        statusColors[item.status || "upcoming"]
                      )}
                    >
                      {item.status === "done" && (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {item.status === "in-progress" && (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {/* Quarter Badge */}
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "mb-2 text-xs font-semibold",
                        statusBadgeVariants[item.status || "upcoming"]
                      )}
                    >
                      {item.quarter}
                    </Badge>

                    {/* Title + Description */}
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Coming Soon Overlay */}
          {blurFromIndex >= 0 && blurFromIndex < items.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-4 pt-16 bg-gradient-to-t from-card via-card/80 to-transparent"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Coming Soon...
              </span>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
