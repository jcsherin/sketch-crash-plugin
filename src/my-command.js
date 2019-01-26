import BrowserWindow from 'sketch-module-web-view'
const UI = require('sketch/ui')

export default function () {
  const options = {
    identifier: 'unique.id',
    width: 240,
    height: 180,
    show: false
  }

  var browserWindow = new BrowserWindow(options)

  // only show the window when the page has loaded
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  const webContents = browserWindow.webContents

  // add a handler for a call from web content's javascript
  webContents.on('close-browser-window', (s) => {
    browserWindow.close();
  })

  browserWindow.loadURL(require('../resources/webview.html'))
}
