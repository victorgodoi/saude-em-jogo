const path = require('path');

module.exports = {
  entry: './src/index.js', // Ponto de entrada do projeto
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Para compilar código JSX/ES6+
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Para carregar arquivos CSS
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Para carregar imagens
        type: 'asset/resource',
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Para importar arquivos sem especificar extensão
  },
  devServer: {
    static: './dist',
    hot: true, // Hot Module Replacement
  },
  mode: 'development', // Modo de build (alterar para 'production' em produção)
};
