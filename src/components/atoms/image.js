/* eslint-disable import/no-unresolved */
import NextImage from "next/image"
import styles from "@styles/components/atoms/image.module.scss"

const Image = (props) => {
  const { src, alt, width, height } = props

  return (
    <NextImage
      className={styles.image}
      src={`${src}_1x.png`}
      srcSet={`${src}_2x.png 2x`}
      alt={alt}
      width={width}
      height={height}
      quality={100}
    />
  )
}

export default Image
