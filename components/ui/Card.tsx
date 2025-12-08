import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass';
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
    className,
    variant = 'default',
    children,
    ...props
}, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'rounded-xl transition-all duration-300',
                variant === 'glass'
                    ? 'glass-card text-white'
                    : 'bg-secondary shadow-xl border border-white/10 text-white',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
