import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ButtonCase {
  loading?: boolean;
  disabled?: boolean;
  slot?: 'start' | 'end';
}

const buttonVariants = cva(` px-24 py-8 transition-colors duration-300`, {
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
});
type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends ComponentPropsWithoutRef<'button'>, ButtonVariants {}

type ButtonRef = ElementRef<'button'>;

export const Button = forwardRef<ButtonRef, ButtonProps>(({ variant, rounded, size, press, ...props }, ref) => {
  return (
    <button className={buttonVariants({ variant, rounded, size, press })} {...props} ref={ref}>
      buttondsa
    </button>
  );
});

Button.displayName = 'Button';
