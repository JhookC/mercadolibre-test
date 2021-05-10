/* eslint-disable import/no-unresolved */
import Items from "@models/items"
import Item from "@models/item"
import fetcher from "@utils/fetcher"

export default (req, res) => {
  const { query } = req
  const { q } = query

  const url = `/sites/MLA/search?q=${q}`

  return fetcher({ url }).then((data) => {
    const { results } = data

    const searchResults = new Items()

    const items = results.map((item) => {
      searchResults.followCategories({ id: item.category_id })

      const newItem = new Item({
        id: item.id,
        title: item.title,
        picture: item.thumbnail,
        condition: item.condition,
        freeShipping: item.shipping.free_shipping,
      })

      const priceDetailed = item.price.toString().split(".")
      newItem.setPrice({
        currency: item.currency_id,
        amount: Number(priceDetailed[0]),
        decimals: Number(priceDetailed[1]) || 0,
      })

      return newItem
    })

    searchResults
      .setAuthor({ name: "Jeffrey", lastname: "Hooker" })
      .setItems({ items })
      .setCategories()

    return res.status(200).json(searchResults)
  })
}
