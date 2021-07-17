const fs = require('fs');
const path = require('path');
const converter = require('../src');

let patch;
beforeAll(() => {
    patch = fs.readFileSync(path.join(__dirname, '../p.patch'), { encoding: 'utf8'});
})

test('should do stuff', () => {
    converter(patch);
})