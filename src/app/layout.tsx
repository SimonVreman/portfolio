import type { Metadata } from 'next'
import { Karla, Nunito_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const karla = Karla({
  variable: '--font-heading',
  subsets: ['latin'],
})

const nunito = Nunito_Sans({
  variable: '--font-paragraph',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Simon Vreman',
    template: '%s - Simon Vreman',
  },
  metadataBase: new URL('https://simonvreman.nl'),
  alternates: { canonical: '/' },
  description: 'Portfolio, blog and contact',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="/sln.js"
          data-api-host="/_sln"
          data-token={process.env.NEXT_PUBLIC_SELINE_TOKEN}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${karla.variable} ${nunito.variable} p-6 py-8 antialiased md:py-12 dark:bg-zinc-950`}
      >
        <div className="prose prose-zinc font-paragraph prose-headings:font-heading dark:prose-invert mx-auto">
          <article>{children}</article>

          <footer className="prose-a:text-zinc-500 flex flex-wrap items-center gap-2 pt-12">
            <a href="https://github.com/simonvreman" target="_blank">
              GitHub
            </a>
            -
            <a href="https://linkedin.com/in/simonvreman" target="_blank">
              LinkedIn
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}
