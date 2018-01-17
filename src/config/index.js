const API_URL = process.env.API_URL || 'https://google.com';

export default {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT,
    withSSR: true,
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
        ws: false,
      },
    },
  },
  apiUrl: API_URL,
};
