import { isNumber } from './isNumber'

// eslint-disable-next-line no-undef
describe('isNumber Utils', () => {
  // eslint-disable-next-line no-undef
  it('Its a number', () => {
    [0, 1, 2, -1, 1.345e17, '1'].forEach((n) => {
      // eslint-disable-next-line no-undef
      expect(isNumber(n)).toEqual(true)
    })
  })

  // eslint-disable-next-line no-undef
  it('Its not a number', () => {
    [false, true, NaN, [], {}, '1a'].forEach((n) => {
      // eslint-disable-next-line no-undef
      expect(isNumber(n)).toEqual(false)
    })
  })
})
