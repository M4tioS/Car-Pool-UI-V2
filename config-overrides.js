const webpack = require('webpack');

// Config
module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    querystring: require.resolve('querystring-es3')
  };
  return config;
};
