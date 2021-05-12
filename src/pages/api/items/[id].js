/* eslint-disable import/no-unresolved */
import Item from "@models/item"
import fetcher from "@utils/fetcher"

export default (req, res) => {
  const {
    query: { id },
  } = req

  let newItem = {}

  return Promise.all([
    fetcher({ url: `/items/${id}` }),
    fetcher({ url: `/items/${id}/description` }),
  ])
    .then((data) => {
      const itemData = data[0]
      const descriptionData = data[1]

      newItem = new Item({
        id: itemData.id,
        title: itemData.title,
        picture: itemData.pictures[0].secure_url,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
      })
        .setExtraData({
          sold_quantity: itemData.sold_quantity,
          description: descriptionData.plain_text,
        })
        .setAuthor({ name: "Jeffrey", lastname: "Hooker" })
        .setPrice({ currency: itemData.currency_id, amount: itemData.price })

      return fetcher({ url: `/categories/${itemData.category_id}` })
    })
    .then((data) => {
      const result = newItem.encapsuleItem()
      result.categories = data.path_from_root.map((category) => category.name)

      return res.status(200).json(result)
    })
    .catch(() => res.status(500).json("Error..."))
}
