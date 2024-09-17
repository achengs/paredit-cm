const fs = require("fs")
const inline = require("web-resource-inliner")

inline.html(
  {
    fileContent: readFileSync("./index.html"),
    relativeTo: "./",
  },
  (err, result) => {
    if (err) { throw err }
    fs.writeFileSync("./demo.html", result)
  }
)


function readFileSync(file) {
  const contents = fs.readFileSync(file, "utf8")
  return process.platform === "win32" ? contents.replace(/\r\n/g, "\n") : contents
}

// 1. npm install web-resource-inliner
// 2. node ./inline.js