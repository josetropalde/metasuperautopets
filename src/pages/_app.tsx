import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DM_Mono } from 'next/font/google'

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  weight: ["300", "400", "500"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${dmMono.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
