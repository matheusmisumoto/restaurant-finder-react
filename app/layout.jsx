import { Inter } from 'next/font/google'

export const metadata = {
    title: "Tastin' - Find restaurants near you!",
    description: "Don't know where to eat? Visit us to find restaurants nearby!",
}

const inter = Inter({
  weight: ['500', '700'], 
  subsets: ['latin']
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div id="root">{children}</div>
          <div id="modal-root"></div>
        </body>
      </html>
    )
}