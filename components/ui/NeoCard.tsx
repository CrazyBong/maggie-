import { cn } from "@/lib/utils";

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  shadow?: "sm" | "md" | "lg" | "xl";
  bg?: string;
  rotation?: number;
}

export function NeoCard({
  children,
  className,
  hover = false,
  shadow = "md",
  bg = "bg-bg-white",
  rotation = 0,
  ...props
}: NeoCardProps) {
  return (
    <div
      className={cn(
        "neo-card",
        hover && "neo-card-hover",
        bg,
        {
          "shadow-sm": shadow === "sm",
          "shadow-md": shadow === "md",
          "shadow-lg": shadow === "lg",
          "shadow-xl": shadow === "xl",
        },
        className
      )}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
