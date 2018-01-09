/* eslint-disable no-eval */
const ope = ['+', '-', '*', '/', '']
const opeLen = ope.length

module.exports = (init = 1000, end = 10000) => {
  for (let i = init; i < end; i += 1) {
    const nums = String(i).split('')

    for (let j = 0; j < opeLen; j += 1) {
      for (let k = 0; k < opeLen; k += 1) {
        for (let l = 0; l < opeLen; l += 1) {
          let equation = nums[3]
          equation += ope[j]
          equation += nums[2]

          equation += ope[k]
          equation += nums[1]

          equation += ope[l]
          equation += nums[0]

          if (equation.length > 4) {
            if (i === eval(equation)) {
              return parseInt(nums.reverse().join(''), 10)
            }
          }
        }
      }
    }
  }

  return -1
}
