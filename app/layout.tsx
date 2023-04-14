// imports
import { Metadata } from 'next'
import font from '@/styles/fonts/Fonts'

// styles
import '@/styles/globals.scss'
import MainMenu from '@/components/mainmenu/MainMenu'

export const metadata: Metadata = {
  title: "Samdev's Software Development",
  description: "Hello world, come and check my work and technologies. Let's create amazing stuffs together"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={font.className}>
        <MainMenu />
        {children}
      </body>
    </html>
  )
}
