import * as React from 'react';
import { clsx } from 'clsx';

const Button: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <button
      data-testid="button"
      className={clsx([
        'bg-gray-500',
        'border-gray-100',
        'text-gray-50',
        'border-4',
        'py-2',
        'px-4',
        'rounded-lg',
        'text-gray-800',
        'disabled:opacity-50',
        'disabled:cursor-not-allowed',
      ])}
    >
      {props.children}
    </button>
  );
};

export default Button;
