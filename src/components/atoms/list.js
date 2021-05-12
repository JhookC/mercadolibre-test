/* eslint-disable import/no-unresolved */
import styles from "@styles/components/atoms/list.module.scss"

const List = (props) => {
  const { children, customClasses } = props
  return <main className={`${styles.list} ${customClasses}`}>{children}</main>
}

export default List
