import { ComponentPropsWithoutRef, ElementRef, ReactElement, ReactNode, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  ` text-body-3 
   flex justify-center items-center 
   gap-x-4 min-w-64 min-h-32 px-24 py-8 
   transition-colors duration-300`,
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
        ring-[1px] ring-primary-500 text-primary-500 
        `,
        tetiary: `
        disabled:text-primary-200
        hover:text-primary-600
        active:text-primary-700 
        text-primary-500 underline underline-offset-[3px]
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
        half: ' w-[50%]',
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
type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'slot'>, ButtonVariants {
  loading?: boolean;
  slotDirection?: 'start' | 'end';
  slot?: ReactNode;
}

type ButtonRef = ElementRef<'button'>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, slotDirection, slot, loading, rounded, size, press, children, ...props }, ref) => {
    return (
      <button className={buttonVariants({ variant, rounded, size, press })} {...props} ref={ref}>
        {slotDirection === 'start' && <div className="h-16 w-16 flex justify-center items-center">{slot}</div>}
        <span>{children}</span>
        {slotDirection === 'end' && <div className="h-16 w-16 flex justify-center items-center">{slot}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';
