import React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`w-full px-3 py-2 rounded-xl min-h-32 bg-neutral-950/60 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 ${props.className||""}`} />
}
