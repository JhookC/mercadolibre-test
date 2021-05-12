/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import Price from "@models/price"
import Author from "@models/author"

class Item {
  constructor({ id, title, picture, condition, state_name, free_shipping }) {
    this.id = id
    this.title = title
    this.picture = picture
    this.condition = condition
    this.state_name = state_name
    this.free_shipping = free_shipping
  }

  setExtraData({ sold_quantity, description }) {
    this.sold_quantity = sold_quantity
    this.description = description

    return this
  }

  setPrice({ currency, amount }) {
    const priceDetailed = amount.toString().split(".")

    this.price = new Price({
      currency,
      amount: Number(priceDetailed[0]),
      decimals: Number(priceDetailed[1]) || 0,
    })

    return this
  }

  setAuthor({ name, lastname }) {
    this.author = new Author({ name, lastname })
    return this
  }

  encapsuleItem() {
    const { author } = this
    delete this.author

    return {
      author,
      item: this,
    }
  }
}

export default Item
