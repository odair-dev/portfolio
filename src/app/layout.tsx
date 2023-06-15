import { Inter } from 'next/font/google';
import '@/scss/main.scss';
import { GlobalProvider } from '@/providers/GlobalContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Odair Sobrinho | Portfólio',
  description: 'Odair Sobrinho - Desenvolvedor Front End - Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
