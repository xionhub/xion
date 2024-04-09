import React from 'react';

export const Spacing = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);

Spacing.displayName = 'Spacing';
