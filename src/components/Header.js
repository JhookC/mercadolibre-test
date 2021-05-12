/* eslint-disable import/no-unresolved */
import NavBar from "@/components/organism/NavBar"
import styles from "@styles/components/Header.module.scss"

const Header = () => (
  <header className={styles.header}>
    <NavBar />
  </header>
)

export default Header
