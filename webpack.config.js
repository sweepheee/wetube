// 웹팩은 옛날 js만 쓸 수 있음.

const path = require("path"); 
// import 와 동일. 여기선 import 쓸 수 없음.
// nodeJS에서 path는 기본 패키지로 설치되어있음. 
// 경로를 지정해서 저장할 수 있게 해줌.
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
// WEBPACK_ENV는 package.json에 정의된 scripts부분과 똑같이 맞춰준다.

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// dirname -> 어디에서든 접근 가능한 NodeJS 전역 변수
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test : /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader"
                    },
                    {
                        loader : "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: "cover 99.5%" })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [ new ExtractCSS("styles.css")]
};

module.exports = config;