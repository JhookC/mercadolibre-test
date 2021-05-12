const currencyFormat = (num) =>
  `$ ${num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`

export default currencyFormat
