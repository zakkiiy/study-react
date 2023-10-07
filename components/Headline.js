import classes from './Headline.module.css'

const inter = Headline({ subsets: ['latin'] })

export function Headline(props) {
  console.log(props)
  return (
    <div>
      <h1 className={classes.title} >{props.page} Page</h1>
      <p className={classes.title}>
        Get started by editing&nbsp;
        {props.children}
      </p>

      
    </div>
  )
}
