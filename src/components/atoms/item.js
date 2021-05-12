/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import { useRouter } from "next/router"
import styles from "@styles/components/atoms/item.module.scss"
import Image from "@/components/atoms/image"
import Currency from "@utils/currency.pipe"

const Item = (props) => {
  const router = useRouter()
  const { data } = props

  return (
    <article
      className={styles.item}
      onClick={() => router.push(`/items/${data.id}`)}
    >
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={data.picture}
          alt={data.title}
          width="180"
          height="180"
        />
        <div className={styles.info}>
          <div className={styles.status}>
            <div className={styles.values}>
              <h2 className={styles.title}>{Currency(data.price.amount)}</h2>
              {data.free_shipping ? (
                <Image
                  className={styles.shipping}
                  src="/images/icons/shipping"
                  alt="Shipping"
                  height="20"
                  width="20"
                />
              ) : null}
            </div>
            <span className={styles.state}>{data.state_name}</span>
          </div>
          <p className={styles.description}>{data.title}</p>
        </div>
      </div>
    </article>
  )
}

export default Item
