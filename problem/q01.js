const reverse = str => str.split('').reverse().join('')

  // 左が必ず1にならないと行けない
  // よって右端も1でなければならない = 奇数である
module.exports = () => {
  // 10以上の奇数
  const initial = 11

  for (let num = initial; ; num += 2) {
    const str10 = num.toString()
    const str8 = num.toString(8)
    const str2 = num.toString(2)

    // 全ての基数の文字列が逆順と同一である
    if (str10 === reverse(str10)
    && str8 === reverse(str8)
    && str2 === reverse(str2)) {
      return num
    }
  }
}
