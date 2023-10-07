import styles from '@/styles/Home.module.css'

const inter = Headline({ subsets: ['latin'] })

export function Headline(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.page} Page</h1>
      <p>
        Get started by editing&nbsp;
        {props.children}
      </p>

      
    </div>
  )
}
