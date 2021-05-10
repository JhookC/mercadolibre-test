/* eslint-disable import/no-unresolved */
import SearchInput from "@/components/atoms/search-input"
import Image from "@/components/atoms/image"
import styles from "@styles/components/molecules/search-bar.module.scss"

const SearchBar = () => (
  <form className={styles["search-bar"]}>
    <SearchInput
      type="text"
      name="search"
      label=""
      placeholder="Nunca dejes de buscar"
    />
    <button className={styles.btn} aria-label="Buscar" type="submit">
      <Image
        src="/images/icons/search"
        alt="search icon"
        width="16"
        height="16"
      />
    </button>
  </form>
)

export default SearchBar
