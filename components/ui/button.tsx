import { cn } from "@/lib/utils";
import type { Route } from "next";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: Route;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-gold text-primary hover:bg-[#b28f21]",
  outline: "border border-gold text-gold hover:bg-gold hover:text-primary",
  ghost: "text-primary hover:bg-zinc-100"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base"
};

export function Button({
  className,
  variant = "solid",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold/60",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
