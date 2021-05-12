/* eslint-disable import/no-unresolved */
import Image from "@/components/atoms/image"
import Button from "@/components/atoms/button"
import Currency from "@utils/currency.pipe"
import styles from "@styles/components/organism/ItemDetails.module.scss"

const ItemDetails = (props) => {
  const { data } = props

  return (
    <main className={styles.description}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={data.picture}
          height={680}
          width={680}
        />
        <div className={styles.info}>
          <span className={styles.eyebrow}>
            {data.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {data.sold_quantity} vendidos
          </span>
          <h1 className={styles.title}>{data.title}</h1>
          <h2 className={styles.price}>{Currency(data.price.amount)}</h2>
          <Button value="Comprar" />
        </div>
      </div>
      <div className={styles.product_description}>
        <h3 className={styles.description_title}>Descripción del producto</h3>
        <p className={styles.description_text}>{data.description}</p>
      </div>
    </main>
  )
}

export default ItemDetails
