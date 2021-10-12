import { closePlugin } from './closePlugin';
import flattenTokens from './flattenTokens';
import importTokens from './importTokens';

const parseJson = (jsonString: string) => {
    try {
        var jsonObject = JSON.parse(jsonString)
        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (jsonObject && typeof jsonObject === "object") {
            return jsonObject
        }
    }
    catch (e) { }
    // return false if invalid
    return false;
}

const importFile = (fileData) => {
  // validate & parse json
  const parsedTokenObject = parseJson(fileData)
  // flatten tokens
  const tokens = flattenTokens(parsedTokenObject)
  // import tokens into figma
  importTokens(tokens)
  // error out of invalid tokens
  if (tokens === false) {
    closePlugin({
        notification: '⛔️ Error: Invalid token file.'
    })
  }
}

export { importFile }