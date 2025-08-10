import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };
export function Button({ className = "", children, ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-2xl transition focus:outline-none focus:ring-2 focus:ring-neutral-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
