/* eslint-disable import/no-unresolved */
import styles from "@styles/components/atoms/search-input.module.scss"

const SearchInput = (props) => {
  const { type, name, label, placeholder } = props

  return (
    <input
      className={styles["search-input"]}
      type={type}
      name={name}
      aria-label={label}
      placeholder={placeholder}
    />
  )
}

export default SearchInput
