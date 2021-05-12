/* eslint-disable import/no-unresolved */
import Link from "next/link"
import Image from "@/components/atoms/image"
import SearchBar from "@/components/molecules/search-bar"
import styles from "@styles/components/organism/NavBar.module.scss"
import Grid from "src/layout/Grid"

const NavBar = () => (
  <nav className={styles.nav}>
    <Grid>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.link}>
          <Image
            src="/images/logos/logo"
            alt="mercadolibre logo"
            width="44"
            height="32"
          />
        </a>
      </Link>
      <SearchBar />
    </Grid>
  </nav>
)

export default NavBar
