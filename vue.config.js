const path = require("path")
module.exports = {
    devServer: {
        proxy: {
            '/api/weather':{
                target: process.env.VUE_APP_WEATHER_API_ENDPOINT,
                changeOrigin: true,
                pathRewrite: {
                    '^/api/weather':''
                }
            }
        }
    }
}