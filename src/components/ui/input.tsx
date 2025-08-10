import React from "react";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full px-3 py-2 rounded-xl bg-neutral-950/60 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 ${props.className||""}`} />
}
