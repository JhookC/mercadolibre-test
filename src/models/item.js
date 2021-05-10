/* eslint-disable import/no-unresolved */
import Price from "@models/price"

class Item {
  constructor({ id, title, picture, condition, freeShipping }) {
    this.id = id
    this.title = title
    this.picture = picture
    this.condition = condition
    this.free_shipping = freeShipping
  }

  setPrice({ currency, amount, decimals }) {
    this.price = new Price({ currency, amount, decimals })
  }
}

export default Item
