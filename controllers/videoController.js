import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        // await -> 다음 과정이 끝날 때까지 기다려라. 반드시 async와 함께 사용.
        res.render("home", {pageTitle: "Home", videos});
        //res.render(불러올 페이지, 넘길 값)
        // videos : videos 를 줄여서 videos라고 할 수있다.
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle: "Home", videos});
    }
}

export const search = (req, res) => {
    //const searchingBy = req.query.term; ES6전 입력값 term을 가져오는 방법. 아래처럼 고쳐쓸 수 있다.
    const {query: { term: searchingBy } } = req; //req.query.term을 searchingBy란 변수에 저장.
    console.log(searchingBy); //term 입력값을 표시함
    res.render("search", {pageTitle: "Search", searchingBy: searchingBy, videos });
}

export const getUpload = (req, res) => res.render("upload", {pageTitle: "upload"});

export const postUpload = async(req, res) => {
    const { 
        body : { title, description }, 
        file : { path } 
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}


export const videoDetail = async(req, res) => 
{
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        console.log(video);
        res.render("videoDetail", {pageTitle: "videoDetail", video});
    } catch(error) {
        console.log(error);
        res.redirect(routes.home);
    }
}


export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});
