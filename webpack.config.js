const path = require('path');

module.exports = {
  entry: {
    index: './js/index.js',
    project: './js/project.js',
    reconstruction: './js/reconstruction.js',
    works: './js/works.js',
    materials: './js/materials.js',
    contacts: './js/contacts.js',
    privacy: './js/privacy.js'
  },
  output: {
    filename: '[name]-min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};