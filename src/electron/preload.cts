const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    openExternal: (link: string) => electron.ipcRenderer.send('openExternal', link),
    getAnimes: () => electron.ipcRenderer.invoke('getAnimes'),
})