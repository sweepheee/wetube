import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express();

//const PORT = 4000;

//const handleListening = (req, res) => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from homeasdasd");

const handleProfile = (req, res) => res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//     console.log("Between");
//     next(); --->>여기 next()함수를 적어주지않으면 미들웨어를 끊어버린다. 이를 이용해서 강제로 미들웨어를 끊을 수 있다.
// }

//위에서 부터 순서대로 작동한다 순서주의!!
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());


// app.use(betweenHome);
//middleware 가 모든 요청과 응답사이에 작동되도록 할 수있다. 반드시 최상위에 존재해야만 한다.

app.get("/", handleHome);
//app.get("/", betweenHome, handleHome);
// "/"라고 입력됐을 때 수행됨.
//betweenHome -> middleWare 요청과 응답사이에 수행됨.
//handleHome -> 응답. handleHome펑션 수행.

app.get("/profile", handleProfile);

//app.listen(PORT, handleListening);


export default app;