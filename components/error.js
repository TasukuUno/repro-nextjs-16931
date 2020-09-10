import styles from './error.module.scss'

export default function Error(props) {
  return (
    <div className={styles.error}>
      {`Error! ${props.text}`}
    </div>
  )
}
