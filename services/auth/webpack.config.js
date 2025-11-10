import path from 'path';
import { fileURLToPath } from 'url';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Default to development if NODE_ENV is not set
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    module: true,
    chunkFormat: 'module',
    environment: {
      module: true,
      dynamicImport: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  externals: [
    nodeExternals({
      // Allow bundling of modules from node_modules if needed
      // You can whitelist specific packages if needed
      importType: 'module',
    }),
  ],
  resolve: {
    alias: {
      '@controllers': path.resolve(__dirname, 'src/controllers'),
      '@middlewares': path.resolve(__dirname, 'src/middlewares'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.js', '.json'],
  },
  optimization: {
    // Enable tree shaking
    usedExports: true,
    minimize: isProduction,
    // Remove unused code - webpack will read this from package.json
    // but we can be explicit here
  },
  // Disable eval in development for better tree shaking visibility
  devtool: isProduction ? false : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current',
                  },
                  modules: false, // Preserve ES modules for tree shaking
                },
              ],
            ],
            plugins: [
              [
                'babel-plugin-add-import-extension',
                {
                  extension: 'js',
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

export default config;
