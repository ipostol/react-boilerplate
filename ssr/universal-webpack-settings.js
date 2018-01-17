export default {
  server: {
    input: './server',
    output: '../dist/server/server.js',
  },
  exclude_from_externals: [
    /.*/,
  ],
};
