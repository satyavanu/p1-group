const proxy = require("http-proxy-middleware");

module.exports = function (app: any) {
    app.use(
        '/api',
        proxy({
            target: process.env.API_URL,
            changeOrigin: true,
            secure: false,
        })
    );
};


