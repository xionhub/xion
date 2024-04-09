import { ComponentPropsWithoutRef, ElementRef, ReactElement, ReactNode, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  ` flex justify-center items-center gap-x-4 min-w-64 min-h-32 font-suit px-24 py-8 transition-colors duration-300`,
  {
    variants: {
      variant: {
        primary: ` bg-primary-500 text-neutral-50 hover:bg-primary-600 active:bg-primary-700 `,
        secondary: ``,
        outline: ``,
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

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, ButtonVariants {
  loading?: boolean;
  slotDirection?: 'start' | 'end';
  slotItem?: ReactNode;
}

type ButtonRef = ElementRef<'button'>;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ variant, slotDirection, slotItem, loading, rounded, size, press, children, ...props }, ref) => {
    return (
      <button className={buttonVariants({ variant, rounded, size, press })} {...props} ref={ref}>
        {slotDirection === 'start' && <div className="h-16 w16">{slotItem}</div>}
        <span>{children}</span>
        {slotDirection === 'end' && <div className="h-16 w16">{slotItem}</div>}
      </button>
    );
  }
);

Button.displayName = 'Button';
