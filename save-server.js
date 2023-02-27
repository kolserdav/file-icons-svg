// @ts-check
const http = require("http");
const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "./dist");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (!url) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const data = decodeURI(url.replace(/^\/\?d=/, "")).replace(/\s\s/g, "");
  const text = data.match(/>[A-Za-z0-9]+<\/text>/);
  if (text) {
    const name = text[0].replace(/^>/, "").replace("</text>", "").toLowerCase();
    const filePath = path.resolve(distPath, `${name}.svg`);
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath);
    }
    fs.writeFileSync(filePath, data);
  } else {
    console.error("Error parse name");
  }
  res.end("success");
});

const port = process.env.SERVER_PORT || 3001;

server.listen(port, () => {
  console.log("Save server listen at port:", port);
});
