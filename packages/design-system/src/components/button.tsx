import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'div'> {}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <div onClick={() => {}} className={' px-24 text-white bg-primary-300'} {...props}>
      dsadsadsa
    </div>
  );
};
