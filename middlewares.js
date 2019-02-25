import routes from "./routes";

//전역에 변수를 줄 수 있게 세팅함.


//아래의 함수에서 정의된 변수값을 다른 곳에서도 사용할 수 있게끔 app.js에서 설정했음.
//예를들면 spring 컨트롤러에서 map이나 session을 넘긴값을 html에서 받을 수 있음.
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
}