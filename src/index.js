
const lineReader = require('line-reader');
const parseDiff = require('parse-diff');
const fs = require('fs');
const path = require('path');


/**
 * @description build a valid diff patch using an input obj
 * @param {any} diffObj
 * @returns {any}
 */
function buildDiff(diffObj) {
    //TODO
}
/**
 * @description finds a matching line in the input file
 * @param {regex} lineRegex
 * @param {any} inputLine
 * @returns {number} lineNumber
 */
function findLine(lineRegex, inputLine) {
    // TODO
}
/**
 * @description scans input file using a the diffObject
 * @param {any} file
 * @param {any} diffObj
 * @returns {any}
 */
function scanInputFile(file, diffObj) {

}
module.exports = function(patchFile) {
    const diffObj = parseDiff(patchFile);
    diffObj.forEach(chunk => {
        const p = path.join(__dirname, path.relative(__dirname, chunk.from))
        console.log(p)
        if (fs.existsSync(p)) {
            console.log(chunk.changes)
        }
    })

}