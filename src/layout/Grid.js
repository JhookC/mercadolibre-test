/* eslint-disable import/no-unresolved */
import styles from "@styles/layout/Grid.module.scss"

const Grid = (props) => {
  const { children, customClasses } = props

  return <div className={`${styles.grid} ${customClasses}`}>{children}</div>
}

export default Grid
