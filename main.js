const { app, BrowserWindow } = require('electron')  // this app is made in Electron, so we need to do this.
                                                    // it is the equavalent of `import electron` in python

// Want to enable this, as having it enabled doesn't cause
// any known issues
// See https://github.com/electron/electron/issues/18397
app.allowRendererProcessReuse = true;

// this file is just the launcher for the app. It starts the app and tweaks a few settings about it

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app
    win.loadFile('index.html')

    // no need for a menu bar with Hangman game
    win.setMenuBarVisibility(false)

    // We don't want the Dev Tools to auto-open
    // but Ctrl-Shift-I still opens them in case
    // they are needed when debugging
    // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
