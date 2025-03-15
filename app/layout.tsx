import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bhagavad Gita GPT - Divine Wisdom, Instantly",
  description: "Ask questions, seek guidance, and explore the teachings of the Gita through AI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-helvetica bg-black text-white antialiased">{children}</body>
    </html>
  )
}

