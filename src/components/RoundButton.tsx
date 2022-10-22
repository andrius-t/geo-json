import React from 'react';
import { classnames } from '../helpers/classnames';

const buttonType = {
  blue: 'inline-flex items-center rounded-full border border-transparent bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  green: 'inline-flex items-center rounded-full border border-transparent bg-green-600 p-2 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
};

type Props = {
  buttonColor?: "blue" | "green";
}

export function RoundButton({ className = "", buttonColor = "blue", ...props } : (React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props)) {
  return (
    <button
      {...props}
      className={classnames(className, buttonType[buttonColor])}
    />
  );
}
