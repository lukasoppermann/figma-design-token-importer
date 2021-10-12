const importTokens = (tokens) => {
  console.log('tokens: ', tokens)
  // define importable types
  const tokensByType = {
    color: [],
    type: [],
    shadow: []
  }
  //
  for (let token in tokens) {
    if (tokens[token].type === 'color') {
      tokensByType.color.push({
        name: token,
        value: tokens[token].value
      })
    }
    console.log('token:', token)
  }
  console.log(tokensByType)
}

export default importTokens