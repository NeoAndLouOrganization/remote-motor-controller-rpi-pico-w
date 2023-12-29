import path from 'path';

import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';

const webpackServerCommonConfig: Configuration = {
  entry: './src/server/index.tsx',
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    clean: false,
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: false,
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

export default webpackServerCommonConfig;
