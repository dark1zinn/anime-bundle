import { app, BrowserWindow, ipcMain, shell } from 'electron'
import path from 'path'
import { isDev } from './util.js';
import { getPreloadPath } from './pathResolver.js';
import { getAnimesResults, getSingleAnime }from './fetchData.js';

type test = string;

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 800,
        resizable: true,
        //titleBarStyle: 'hidden',
        //...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
        webPreferences: {
            preload: getPreloadPath()
        },
    });
    if (isDev()) {
        mainWindow.loadURL('http://localhost:5123')
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
    }

    ipcMain.on('openExternal', (_, link) => {
        shell.openExternal(link)
    })
    ipcMain.handle('getSearchAnimes', async (_, searchString) => {
        console.log('atSearch')
        return await getAnimesResults(searchString)
    })
    ipcMain.handle('getSingleAnime', async (_, link) => {
        console.log('atSingle')
        return await getSingleAnime(link)
    })
})