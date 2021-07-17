const parseDiff = require("parse-diff");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

module.exports = function (patchFile) {
  const diffObj = parseDiff(patchFile);
  diffObj.forEach((file) => {
    const fileName = path.join(__dirname, path.relative(__dirname, file.from));
    if (fs.existsSync(fileName)) {
      const fileData = fs.readFileSync(fileName, { encoding: "utf-8" });
      const lines = fileData.split("\n");
      file.chunks.forEach((chunk) => {
        const groups = _.groupBy(chunk.changes, "ln");
        console.log(groups);
        delete groups[undefined];
        Object.keys(groups)
          .map((k) => groups[k])
          .forEach(([del, add]) => {
            const match = del.content.substr(1);
            const replace = add.content.substr(1);
            const matched = lines.find((ln) => ln === match);
            const lineNum = lines.indexOf(matched);
            lines[lineNum] = replace;
          });
      });
      fs.writeFileSync(fileName, lines.join("\n"));
    }
  });
};
