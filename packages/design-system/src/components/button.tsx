import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className={' px-24 text-white bg-primary-300'} {...props}>
      dsadsadsa
    </button>
  );
};
