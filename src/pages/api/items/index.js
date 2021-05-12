/* eslint-disable import/no-unresolved */
import Items from "@models/items"
import Item from "@models/item"
import fetcher from "@utils/fetcher"

export default (req, res) => {
  const { query } = req
  const { search } = query
  const searchResults = new Items()

  return fetcher({ url: `/sites/MLA/search?q=${search}` })
    .then((data) => {
      const { results } = data

      const items = results.map((item) => {
        searchResults.followCategories({ id: item.category_id })

        const newItem = new Item({
          id: item.id,
          title: item.title,
          picture: item.thumbnail,
          condition: item.condition,
          stateName: item.address.state_name,
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

      const mostPopularCategory = [
        ...searchResults.getRefCategories().entries(),
      ].reduce((a, e) => (e[1] > a[1] ? e : a))

      /* const searchCategory = filters
        .find((elem) => elem.id === "category")
        .values[0].path_from_root.map((category) => category.name) */

      searchResults
        .setAuthor({ name: "Jeffrey", lastname: "Hooker" })
        .setItems({ items })
        .deleteRefCategories()

      return fetcher({ url: `/categories/${mostPopularCategory[0]}` })
    })
    .then((data) => {
      // eslint-disable-next-line camelcase
      const { path_from_root } = data

      if (path_from_root.length > 0) {
        searchResults.setCategories({
          categories: path_from_root.map((category) => category.name),
        })
      }

      return res.status(200).json(searchResults)
    })
    .catch(() => res.status(500).json("Error..."))
}
