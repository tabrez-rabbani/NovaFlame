import { cn } from '@/lib/utils';

interface SectionTitleProps {
    subtitle?: string;
    title: string;
    className?: string;
    center?: boolean;
}

export function SectionTitle({
    subtitle,
    title,
    className,
    center = true
}: SectionTitleProps) {
    return (
        <div className={cn('mb-12', center ? 'text-center' : 'text-left', className)}>
            {subtitle && (
                <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold block mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            <div className={cn(
                "h-1 w-20 bg-primary rounded-full mt-4",
                center ? "mx-auto" : ""
            )} />
        </div>
    );
}
