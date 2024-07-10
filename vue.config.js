module.exports = {
    publicPath: process.env.BASE_URL,
    devServer: {     port: 8000,     proxy: "http://127.0.0.1:8000"
  }
  };
  