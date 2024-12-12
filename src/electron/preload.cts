const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    openExternal: (link: string) => electron.ipcRenderer.send('openExternal', link),
    getSearchAnimes: (searchString: string) => electron.ipcRenderer.invoke('getSearchAnimes', searchString),
    getSingleAnime: (link: string) => electron.ipcRenderer.invoke('getSingleAnime', link),
})