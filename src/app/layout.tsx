import '../app/globals.css';

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
      <body>{children}</body>
    </html>
  )
}
