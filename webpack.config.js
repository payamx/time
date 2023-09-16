const path = require('path');

module.exports = {
    entry: './src/index.js', // Replace with the entry file of your project
    output: {
        path: path.resolve(__dirname, 'dist'), // Replace with the output directory of your choice
        filename: 'bundle.js', // Replace with the desired output file name
    },
};