/* eslint-disable import/no-unresolved */
import styles from "@styles/components/atoms/breadcrumb.module.scss"

const Breadcrumb = (props) => {
  const { data } = props

  return (
    <div className={styles.breadcrumb}>
      {data.map((category, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.container} key={index}>
          <span>{category}</span>
          <>
            {data.length - 1 !== index ? (
              <span className={styles.separator}>{">"}</span>
            ) : null}
          </>
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb
