/**
 * Start webpack with watch:
 * webpack --progress --watch
 * or
 * npm run build-watch
 *
 * Start the static node (hapi) server:
 * npm start
*/
module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  cache: true,
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.c9|\.src)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};