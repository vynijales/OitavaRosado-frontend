import '../app/globals.css';
import '../../fontAwesomeConfig';
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Oitava Rosado',
  description: 'Um projeto criado para o processo seletivo da Oitava Rosado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn("font-sans antialiased", fontSans.variable)}>{children}</body>
    </html>
  )
}
