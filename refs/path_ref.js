const path = require('path');
console.log(path.basename(__dirname));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
const obj = path.parse(__filename);
console.log(obj.root);
console.log(path.join(__dirname, 'test', 'index.js'));

