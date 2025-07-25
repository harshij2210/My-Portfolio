import './globals.css';

export const metadata = {
  title: 'My-Portfolio',
  description: 'Harshi Jain Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
