// 使用node.js的路徑
const path = require('path');

// 利用模組將檔案輸出
module.exports = {
    // 進入點預設路徑
    entry: './src/index.js',
    // 輸出點的路徑
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
        },
        ],
    },
    devServer: {
        static: {
            // 輸出路徑
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true
    }
};