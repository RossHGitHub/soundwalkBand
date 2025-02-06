const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(mp4|mov|webm)$/, // Add video file types here
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/videos/[name].[hash].[ext]', // Customize output file name and path
            },
          },
        ],
      },
    ],
  },
};
