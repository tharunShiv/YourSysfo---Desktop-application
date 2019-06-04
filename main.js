const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win; // global reference to the windowo object

function createWindow() {
  // create browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/img/loading.png"
  });

  // load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // open devtools
  //   win.webContents.openDevTools();

  // on closed
  win.on("closed", () => {
    win = null;
  });
}

// run create window function
app.on("ready", createWindow);

// quit when all windows are closed
app.on("window-all-closed", () => {
  // check to see if users are on a mac
  if (process.platform !== "darwin") {
    app.quit();
  }
});
