import Currency from "../utils/currency.pipe"

describe("Currency pipe", () => {
  it("should format number", () => {
    const numberFormated = Currency(5000)
    expect(numberFormated).toEqual("$ 5.000")
  })
})
