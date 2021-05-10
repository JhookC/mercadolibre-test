/* eslint-disable import/no-unresolved */
import Author from "@models/author"

class Items {
  constructor() {
    this.categoriesRef = new Map()
  }

  setItems({ items }) {
    this.items = items
    return this
  }

  setAuthor({ name, lastname }) {
    this.author = new Author({ name, lastname })
    return this
  }

  followCategories({ id }) {
    if (!this.categoriesRef.has(id)) {
      this.categoriesRef.set(id, 1)
    } else {
      const length = this.categoriesRef.get(id) + 1
      this.categoriesRef.set(id, length)
    }
  }

  setCategories() {
    this.categories = [...this.categoriesRef.keys()]
    delete this.categoriesRef
    return this
  }
}

export default Items
