import { ComponentPropsWithoutRef, ElementRef, ReactElement, ReactNode, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'slot'>, ButtonVariants {
  loading?: boolean;
  slotDirection?: 'start' | 'end';
  slot?: ReactNode;
}

type ButtonRef = ElementRef<'button'>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, slotDirection, slot, loading, rounded, size, press, children, className, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, rounded, size, press }), className)} {...props} ref={ref}>
        {slotDirection === 'start' && <div className="h-16 w-16 flex justify-center items-center">{slot}</div>}
        <span>{children}</span>
        {slotDirection === 'end' && <div className="h-16 w-16 flex justify-center items-center">{slot}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';

const buttonVariants = cva(
  `
   text-body-3 
   flex justify-center items-center 
   gap-x-4 min-w-64 min-h-32 px-24 py-8 
   transition-colors duration-300
   `,
  {
    variants: {
      variant: {
        primary: ` 
        disabled:bg-primary-100 disabled:text-primary-400 
        hover:bg-primary-600 
        active:bg-primary-700 
        bg-primary-500 text-neutral-50 
        `,
        secondary: `
        disabled:ring-primary-200 disabled:text-primary-200
        hover:ring-primary-600 hover:text-primary-600 
        active:text-primary-700 active:ring-primary-700
        ring-[1.5px] ring-primary-500 text-primary-500 
        `,
        tetiary: `
        disabled:text-primary-200
        hover:text-primary-600
        active:text-primary-700 
        text-primary-500 underline underline-offset-[3px]
        `,
        ghost: `
        disabled:text-primary-200
        hover:text-primary-600
        active:text-primary-700 
        text-primary-500
        `,

        'danger-primary': `
        disabled:bg-danger-100 disabled:text-danger-400 
        hover:bg-danger-600 
        active:bg-danger-700 
        bg-danger-500 text-neutral-50
        `,
        'danger-secondary': `
        disabled:ring-danger-200 disabled:text-danger-200
        hover:ring-danger-600 hover:text-danger-600 
        active:text-danger-700 active:ring-danger-700
        ring-[1.5px] ring-danger-500 text-danger-500
        `,
        'danger-tetiary': `
        disabled:text-danger-200
        hover:text-danger-600
        active:text-danger-700 
        text-danger-500 underline underline-offset-[3px]
        `,
        'danger-ghost': `
        disabled:text-danger-200
        hover:text-danger-600
        active:text-danger-700 
        text-danger-500
        `,
        'neutral-primary': `
        disabled:bg-neutral-100 disabled:text-neutral-400 
        hover:bg-neutral-800 
        active:bg-neutral-900 
        bg-neutral-700 text-neutral-50
        `,
        'neutral-secondary': `
        disabled:ring-neutral-200 disabled:text-neutral-200
        hover:ring-neutral-600 hover:text-neutral-600 
        active:text-neutral-700 active:ring-neutral-700
        ring-[1.5px] ring-neutral-500 text-neutral-500
        `,
        'neutral-tetiary': `
        disabled:text-neutral-200
        hover:text-neutral-600
        active:text-neutral-700 
        text-neutral-500 underline underline-offset-[3px]
        `,
        'neutral-ghost': `
        disabled:text-neutral-200
        hover:text-neutral-600
        active:text-neutral-700 
        text-neutral-500
        `,
        'neutral-focus-ghost': `
        disabled:text-neutral-300
        hover:text-neutral-800
        active:text-neutral-900 
        text-neutral-700
        font-semi-bold
        `,
      },
      rounded: {
        default: '',
        xs: ' rounded-xs',
        sm: ' rounded-sm',
        md: ' rounded-md',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      size: {
        full: ' w-full',
        half: ' w-[50%] ',
        none: '',
      },

      press: {
        default: '',
        press: ' active:translate-y-2 active:translate-x-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'full',
      rounded: 'default',
      press: 'default',
    },
  }
);
