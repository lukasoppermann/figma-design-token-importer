import { css } from '@emotion/css'
import * as React from 'react'
import { useEffect, useRef } from 'react'

const style = css`
  label {
    padding: 10px 20px;
    background: black;
    color: white;
    border-radius: 4px;
  }
  input {
    /* opacity: 1;
    height: 0;
    width: 0; */
  }
`

const uploadFile = (file) => {
  // init file reader
  const reader = new FileReader()
  // on successful read
  reader.addEventListener('load', (event) => {
    parent.postMessage({
      pluginMessage: {
        command: 'importFile',
        payload: {
          notification: `⏳ Importing ${file.name}`,
          data: event.target.result
        }
      }
    }, '*')
  })
   // if file reading failed
   reader.addEventListener('error', (event) => {
    parent.postMessage({
      pluginMessage: {
        command: 'closePlugin',
        payload: {
          notification: '⛔️ Error importing file.'
        } 
      }
    }, '*')
  })
  // read file
  reader.readAsText(file)
}

const ImportFile = () => {

  return (<form className={style}>
    <label className="button" htmlFor="uploadInput">Import Tokens</label>
    <input id="uploadInput" type="file" onChange={(e) => uploadFile(e.target.files[0])}/>
  </form>)
}

export default ImportFile