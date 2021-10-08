import { importFile } from './modules/importFile'

// initiate UI
figma.showUI(__html__, {
  visible: true
})

figma.ui.onmessage = async (message) => { // PluginMessage
  const { command, payload } = message
    /**
   * on importFile
   * import file and add / replace styles
   */
     if (command === 'importFile') {
       // show progress notification
      figma.notify(payload.notification)
      // read data
      console.clear()
      importFile(payload.data)
    }
  /**
   * on closePlugin
   * close plugin and show notification if available
   */
  if (command === 'closePlugin') {
    // show notification if send
    if (payload?.notification !== undefined && payload?.notification !== '') {
      figma.notify(payload.notification)
    }
    // close plugin
    figma.ui.hide()
    figma.closePlugin()
  }
}