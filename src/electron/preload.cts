const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    openExternal: (link: string) => electron.shell.openExternal(link),
})