import Link from 'next/link'
import { CaretLeftIcon } from '@phosphor-icons/react/dist/ssr'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/" className="mb-6 inline-flex items-center gap-2">
        <CaretLeftIcon /> Back
      </Link>
      {children}
    </>
  )
}
