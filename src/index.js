const fs = require("fs");
const path = require("path");
const _ = require("lodash");

function handleChunks(chunks, lines) {
  chunks.forEach((chunk) => {
    const groups = _.groupBy(chunk.changes, "ln");
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
  return lines;
  
};

function handleUpdate(changes) {
  // iterate over changes
}
module.exports = { handleChunks };
