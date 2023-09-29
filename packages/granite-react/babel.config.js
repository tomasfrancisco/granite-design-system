module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@pages': './src/app/pages',
          '@helpers': './src/app/helpers',
          '@services': './src/app/services',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
