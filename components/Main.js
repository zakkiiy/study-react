import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Main.module.css'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  )
}
