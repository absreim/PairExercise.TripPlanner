const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    }
}
