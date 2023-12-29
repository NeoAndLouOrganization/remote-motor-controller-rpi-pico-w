import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, {Configuration} from 'webpack';

const webpackClientCommonConfig: Configuration = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // This places the fonts within 'fonts' folder in 'dist'
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Main',
      // Load a custom template (lodash by default)
      template: 'index.html',
      meta: {
        description: {
          name: 'description',
          content: 'Remote Controller Web App by Viktor Vasylkovskyi',
        },
      },
    }),

    // new MiniCssExtractPlugin({
    //   filename: 'critical.css', // Name of the output CSS file
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_SERVER_URL': JSON.stringify(
        process.env.NODE_SERVER_URL
      ),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};

export default webpackClientCommonConfig;
