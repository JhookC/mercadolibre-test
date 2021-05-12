/* eslint-disable import/no-unresolved */
import styles from "@styles/components/atoms/button.module.scss"

const Button = (props) => {
  const { value } = props

  return (
    <button type="button" className={styles.button}>
      {value}
    </button>
  )
}

export default Button
