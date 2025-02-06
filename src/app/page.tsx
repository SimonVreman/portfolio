import { InteractiveGridPattern } from '@/components/interactive-grid-pattern'
import { MagicCard } from '@/components/magic-card'
import { cn } from '@/lib/utils'
import { Icon } from '@phosphor-icons/react'
import { ArrowUpRight, CaretDoubleDown, GithubLogo } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <>
      <div className="relative flex h-dvh w-dvw items-center justify-center border-b">
        <div className="via-background absolute h-full w-full bg-linear-to-br from-fuchsia-400 to-emerald-400 opacity-20" />

        <InteractiveGridPattern
          className={cn(
            'opacity-50 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          )}
          width={30}
          height={30}
          squares={[120, 80]}
          squaresClassName="hover:fill-slate-300"
        />

        <div className="pointer-events-none relative text-center">
          <h1 className="font-heading text-5xl font-medium">Simon Vreman</h1>
          <p className="mt-4 text-lg">🏗️ building (web) applications</p>
          <div className="absolute -bottom-32 flex w-full justify-center">
            <CaretDoubleDown className="animate-bounce" size={24} />
          </div>
        </div>
      </div>

      <div className="px-6">
        <Projects />
      </div>

      <div className="px-6">
        <Contact />
      </div>
    </>
  )
}

function Projects() {
  return (
    <div className="mx-auto my-24 flex max-w-screen-md flex-col gap-6">
      <h2 className="font-heading text-4xl font-medium">my work</h2>
      <ProjectCard title="Kerkcloud" href="https://kerkcloud.nl" />
      <ProjectCard title="Vreetmeter" href="https://github.com/simonvreman/vreetmeter" />
      <ProjectCard
        title="Eetmeter Analyser"
        href="https://github.com/simonvreman/eetmeter-analyser"
      />
    </div>
  )
}

function ProjectCard({ title, href }: { title: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <MagicCard
        containerClassName="w-full"
        className="cursor-pointer p-8"
        gradientColor="rgba(0,0,0,0)"
        gradientFrom="var(--color-emerald-400)"
        gradientTo="var(--color-fuchsia-400)"
      >
        <div className="flex w-full items-center justify-between">
          <h2 className="font-heading text-2xl font-medium">{title}</h2>
          <ArrowUpRight size={24} />
        </div>
      </MagicCard>
    </a>
  )
}

function Contact() {
  return (
    <div className="mx-auto my-24 max-w-screen-md space-y-6">
      <h2 className="font-heading text-4xl font-medium">reach me</h2>

      <ContactItem href="https://github.com/simonvreman" Icon={GithubLogo} description="Github" />
    </div>
  )
}

function ContactItem({
  href,
  Icon,
  description,
}: {
  Icon: Icon
  href: string
  description: string
}) {
  return (
    <a
      href={href}
      className="group relative flex w-fit items-center gap-2 p-2 text-xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute -z-10 size-full rounded-2xl bg-linear-30 from-fuchsia-100 to-emerald-100 opacity-0 blur transition-opacity group-hover:opacity-100" />
      <Icon size={24} />
      {description}
    </a>
  )
}
