import * as React from 'react';
import styles from './button.module.scss';
import { clsx } from 'clsx';

const Button: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <button
      data-testid="button"
      className={clsx([
        'outline-0',
        'border-amber-400',
        'border-4',
        'font-bold',
        'py-2',
        'px-4',
        'm-2',
        'rounded',
        'hover:bg-amber-400',
        styles.button,
      ])}
    >
      {props.children}
    </button>
  );
};

export default Button;
