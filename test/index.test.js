const fs = require("fs");
const path = require("path");
const { handleChunks } = require("../src");
const parseDiff = require("parse-diff");
const { toMatchFile } = require('jest-file-snapshot');

expect.extend({ toMatchFile });
function testFn(patchName) {
  const patch = fs.readFileSync(path.join(__dirname, `../${patchName}`), {
    encoding: "utf8",
  });
  const diffObj = parseDiff(patch);
  let lines = [];
  diffObj.forEach((file) => {
    const fileName = path.join(__dirname, path.relative(__dirname, file.from));
    if (fs.existsSync(fileName)) {
      const fileData = fs.readFileSync(fileName, { encoding: "utf-8" });
      lines = lines.concat(fileData.split("\n"));
      handleChunks(file.chunks, lines);
    }
  });
  expect(lines.join('\n')).toMatchFile();
}

test("should handle mixed chunks", () => {
  testFn('p.patch');
});
// test('should handle substractive chunks', () => {

// })
// test('should handle mixed chunks', () => {

// })
// test('should handle complex chunks', () => {

// })

