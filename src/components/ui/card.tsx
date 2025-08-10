import React from "react";
export function Card({ className="", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur ${className}`}>{children}</div>;
}
export function CardHeader({ children }: { children: React.ReactNode }) { return <div className="p-5 border-b border-neutral-800/60">{children}</div> }
export function CardTitle({ className="", children }: { className?: string; children: React.ReactNode }) {
  return <h3 className={`text-neutral-100 text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className="", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
