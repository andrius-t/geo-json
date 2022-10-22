import React from 'react';
import { classnames } from '../helpers/classnames';

const buttonType = {
  blue: 'whitespace-nowrap inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  green: 'whitespace-nowrap inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
};

type Props = {
  buttonColor?: "blue" | "green";
}

export function Button({ className = "", buttonColor = "blue", ...props } : (React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props)) {
  return (
    <button
      {...props}
      className={classnames(className, buttonType[buttonColor])}
    />
  );
}