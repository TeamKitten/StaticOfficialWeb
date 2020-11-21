module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      exclude: /(node_modules)/,
    });
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
      },
    });

    return config;
  },
};
