const { ModuleFederationPlugin } = require('webpack').container;

const moduleFederationConfig = {
  name: 'angular17',
  filename: 'remoteEntry.js',
  exposes: {
    './web-components': './src/bootstrap.ts',
  },
  shared: {},
};

module.exports = {
  output: {
    uniqueName: 'angular17',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin(moduleFederationConfig),
  ]
};
