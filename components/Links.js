import Image from 'next/image'
import classes from './Links.module.css'

// const inter = Links({ subsets: ['latin'] })

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs →",
    description: "Find in-depth information about Next.js features and&nbsp;API",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates →",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy ",
    description: "Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel.",
  },
];

export function Links() {
  return (
    <div>
      <div className={classes.description}>
        <div>

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={classes.grid}>
        {ITEMS.map(item => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {item.title}
              </h2>
              <p>
                {item.description}
              </p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
