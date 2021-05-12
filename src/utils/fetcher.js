class Fetcher {
  static instance

  static baseUrl = "https://api.mercadolibre.com"

  constructor() {
    if (!Fetcher.instance) {
      Object.defineProperty(this, "fetch", {
        writable: false,
        configurable: false,
        value: ({ url, method = "GET", params, isUrlAbsolute = false }) =>
          fetch(isUrlAbsolute ? url : Fetcher.baseUrl.concat(url), {
            method,
            body: JSON.stringify(params),
          }).then(async (res) => {
            if (res.status === 500) {
              throw await res.json()
            }

            return res.json()
          }),
      })
    } else {
      return Fetcher.intance
    }
  }
}

Fetcher.instance = new Fetcher()
Object.freeze(Fetcher.instance)

export default Fetcher.instance.fetch
