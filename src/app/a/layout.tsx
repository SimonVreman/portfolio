import Link from 'next/link'
import { CaretLeft } from '@phosphor-icons/react/dist/ssr'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/" className="inline-flex items-center gap-2">
        <CaretLeft /> Back
      </Link>
      {children}
    </>
  )
}
