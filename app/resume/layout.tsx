import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ramón Morcillo Resume | ramonmorcillo.com",
  description: "Ramón Morcillo's resume and professional profile.",
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}