import flattenTokens from '../../src/modules/flattenTokens'

const inputObject = {
  a: 1,
  b: {
    b1: {
      value: 2,
      type: "color"
    }
  },
  c: {
    value: [2,3,4]
  }
}

const outputObject = {
  a: 1,
  'b.b1': {
    value: 2,
    type: "color"
  },
  c: {
    value: [2,3,4]
  }
}

describe("flattenTokens function", () => {
  test("flattenTokens valid object", () => {
    expect(flattenTokens(inputObject)).toStrictEqual(outputObject)
  })
})