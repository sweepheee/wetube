import routes from "../routes"

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos});
//res.render(불러올 페이지, 넘길 값)
// videos : videos 를 줄여서 videos라고 할 수있다.
}

export const search = (req, res) => {
    //const searchingBy = req.query.term; ES6전 입력값 term을 가져오는 방법. 아래처럼 고쳐쓸 수 있다.
    const {query: { term: searchingBy } } = req; //req.query.term을 searchingBy란 변수에 저장.
    console.log(searchingBy); //term 입력값을 표시함
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos });
}

export const getUpload = (req, res) => res.render("upload", {pageTitle: "upload"});
export const postUpload = (req, res) => {
    const {
        body: { file,title,description } 
    } = req;
        //To Do: Upload and save video
    res.redirect(routes.videoDetail(121212));
}


export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});
