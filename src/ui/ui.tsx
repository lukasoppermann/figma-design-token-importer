import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ImportFile from './components/ImportFile'


const PluginUi = () => {
  return (<ImportFile />)
}

ReactDOM.render(<PluginUi />, document.getElementById('pluginUI'))