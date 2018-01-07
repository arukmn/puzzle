const reverse = str => str.split('').reverse().join('')

module.exports = () => {
  const initial = 11

  for (let i = initial; ; i += 2) {
    const str10 = i.toString()
    const str8 = i.toString(8)
    const str2 = i.toString(2)

    if (str10 === reverse(str10)
    && str8 === reverse(str8)
    && str2 === reverse(str2)) {
      return i
    }
  }
}
