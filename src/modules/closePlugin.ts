export const closePlugin = payload => {
  // show notification if send
  if (payload?.notification !== undefined && payload?.notification !== '') {
    figma.notify(payload.notification)
  }
  // close plugin
  figma.ui.hide()
  figma.closePlugin()
}