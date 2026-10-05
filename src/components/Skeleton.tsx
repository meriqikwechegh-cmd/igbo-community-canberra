/**
 * Skeleton — quiet wireframe preview for async content.
 *
 * Usage:
 *   <Sk h="h-5" w="w-48" />              — inline bar
 *   <Sk h="h-48" w="w-full" />           — image block
 *   <Sk h="h-5" w="w-32" className="mb-2" />
 *
 * The component respects prefers-reduced-motion via the global .sk CSS rule
 * and honours dark mode automatically.
 */

import { cn } from '@/lib/utils';

interface SkProps {
  /** Tailwind height class e.g. "h-4" */
  h: string;
  /** Tailwind width class e.g. "w-full" */
  w?: string;
  /** Extra Tailwind classes */
  className?: string;
  /** Override border-radius class; default "rounded-none" (0px) */
  rounded?: string;
}

export function Sk({ h, w = 'w-full', className, rounded = 'rounded-none' }: SkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('sk block', h, w, rounded, className)}
    />
  );
}

/** A full-width section skeleton wrapper with ARIA live semantics */
interface SkSectionProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function SkSection({
  label = 'Loading community information.',
  children,
  className,
}: SkSectionProps) {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-label={label}
      className={className}
    >
      {children}
      <span className="sr-only">{label}</span>
    </div>
  );
}
