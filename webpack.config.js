module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'raw-loader',
        exclude: /(node_modules)/
      }
    ]
  }
}
