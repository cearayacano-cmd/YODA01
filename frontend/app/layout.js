import './globals.css'

export const metadata = {
  title: 'Universo Customer Care - LATAM',
  description: 'Mission Control · LATAM Carrier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
