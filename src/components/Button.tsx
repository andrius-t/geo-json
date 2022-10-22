import React from 'react';
import { classnames } from '../helpers/classnames';

export function Button({ className = "", color = "blue", ...props } : React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={classnames(className, `whitespace-nowrap inline-flex items-center rounded-md border border-transparent bg-${color}-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2`)}
    />
  );
}