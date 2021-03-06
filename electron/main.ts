/* eslint-disable import/first */
require('../bootstrap')
import 'reflect-metadata'
import { app, BrowserWindow, screen, ipcMain } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer'

import { inicializeControllers } from './src'
import { initializeDatabase } from './src/database'

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const parser = new Readline()

const mySerial = new SerialPort('COM6', {
  baudRate: 9600,
})

let mainWindow: Electron.BrowserWindow | null

async function createWindow() {
  await initializeDatabase()
  inicializeControllers()

  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    width,
    height,
    resizable: false,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
    },
  })
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.removeMenu()
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true,
      })
    )
  }

  mainWindow.setTitle('PianoHelper')

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('page-title-updated', function (e) {
    e.preventDefault()
  })

  mySerial.on('data', function (data) {
    mainWindow.webContents.send(
      'arduinoCom',
      data.toString().replace(/[^A-Za-z0-9]+/g, '')
    )
  })
}

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() })
})

app
  .on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }
  })

app.allowRendererProcessReuse = true
