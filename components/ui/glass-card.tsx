import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "strong";
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = true,
}: GlassCardProps) {
  const variants = {
    default: "bg-card/70 backdrop-blur-xl border-border/20",
    subtle: "bg-card/50 backdrop-blur-md border-border/10",
    strong: "bg-card/90 backdrop-blur-2xl border-border/30",
  };

  return (
    <Card
      className={cn(
        variants[variant],
        "shadow-lg transition-all duration-300",
        hover && "hover:shadow-xl hover:scale-[1.02] hover:border-primary/30",
        className
      )}
    >
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: "blue" | "purple" | "pink" | "orange";
}

export function GradientCard({
  children,
  className,
  gradient = "blue",
}: GradientCardProps) {
  const gradients = {
    blue: "from-blue-500/10 to-violet-500/10",
    purple: "from-violet-500/10 to-purple-500/10",
    pink: "from-pink-500/10 to-rose-500/10",
    orange: "from-orange-500/10 to-amber-500/10",
  };

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-border/20",
        "bg-gradient-to-br",
        gradients[gradient],
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:shadow-2xl hover:scale-[1.02]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <CardContent className="p-6 relative z-10">{children}</CardContent>
    </Card>
  );
}
