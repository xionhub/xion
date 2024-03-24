import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ButtonCase {
  loading?: boolean;
  disabled?: boolean;
}
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}
type ButtonRef = ElementRef<'button'>;

export const Button = forwardRef<ButtonRef, ButtonProps>(({ ...props }, ref) => {
  return <button className={' px-24 text-white bg-primary-300'} {...props} ref={ref}></button>;
});

Button.displayName = 'Button';
