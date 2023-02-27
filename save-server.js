// @ts-check
const http = require("http");
const fs = require("fs");
const path = require("path");

const ICONS_NAME = "files";
const distPath = path.resolve(__dirname, "./dist");
const iconsPath = path.resolve(distPath, ICONS_NAME);

const files = [];
let timeout = setTimeout(() => {}, 0);

const server = http.createServer((req, res) => {
  const { url } = req;
  if (!url) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const colorR = /&c=.+$/;
  const col = url.match(colorR);
  if (!col) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const cc = col[0].replace("&c=", "");
  const cReg = /&t=.+$/;
  const _url = url.replace(colorR, "");
  const c = _url.match(cReg);
  let t = "";
  if (c) {
    t = c[0].replace("&t=", "");
  }
  const data = decodeURI(_url.replace(cReg, "").replace(/^\/\?d=/, "")).replace(
    /\s\s/g,
    ""
  );
  const text = data.match(/>[A-Za-z0-9]+<\/text>/);
  if (!text) {
    console.error("Text is missing");
    res.statusCode = 500;
    res.end("Error");
    return;
  }
  const ext = text[0].replace(/^>/, "").replace("</text>", "").toLowerCase();
  const name = `${ext}.svg`;

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }
  if (!fs.existsSync(iconsPath)) {
    fs.mkdirSync(iconsPath);
  }

  const filePath = path.resolve(iconsPath, name);
  fs.writeFileSync(filePath, data);
  files.push({
    t,
    ext: `.${ext}`,
    name,
    color: cc,
  });
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fs.writeFileSync(
      path.resolve(distPath, `${ICONS_NAME}.json`),
      JSON.stringify(files)
    );
  }, 1000);
  res.end("success");
});

const port = process.env.SERVER_PORT || 3001;

server.listen(port, () => {
  console.log("Save server listen at port:", port);
});
