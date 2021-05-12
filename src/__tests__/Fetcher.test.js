// eslint-disable-next-line no-unused-vars
import next from "next"
import { fetcher, FetcherC } from "../utils/fetcher"

describe("Fetcher", () => {
  it("should be a singleton", () => {
    const instance1 = new FetcherC()
    const instance2 = new FetcherC()

    expect(instance1).toEqual(instance2)
  })

  it("should return an object", async () => {
    const results = await fetcher({ url: "/sites/MLA/search?q=​iPad" })
    expect(results).not.toBe(null)
  })
})
