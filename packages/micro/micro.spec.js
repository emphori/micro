'use strict'

const M = require('./micro')

describe('array-concat', () => {
  it('merges two arrays', () => {
    expect(M.Array.concat([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('array-copyWithin', () => {
  it('copies an array chunk to a given index', () => {
    expect(M.Array.copyWithin(0, 1, 3, [1, 2, 3])).toEqual([2, 3, 3])
  })
})

describe('array-entries', () => {
  it('creates an iterator from an array', () => {
    expect(typeof M.Array.entries([1, 2, 3])[Symbol.iterator]).toEqual('function')
  })
})

describe('array-filter', () => {
  it('removes non-truthy elements from an array', () => {
    expect(M.Array.filter((elem) => elem, [1, 0, 0, 1, 1])).toEqual([1, 1, 1])
  })
})

describe('array-map', () => {
  it('correctly maps a function over an array', () => {
    expect(M.Array.map((elem, i) => elem + i, [1, 2, 3])).toEqual([1, 3, 5])
  })

  it('correctly maps a function over an array (when curried)', () => {
    expect(M.Array.map((elem, i) => elem + i)([1, 2, 3])).toEqual([1, 3, 5])
  })
})

describe('array-reduce', () => {
  it('correctly reduces an array', () => {
    expect(M.Array.reduce((acc, elem) => acc + elem, 0, [1, 2, 3])).toEqual(6)
  })
})
