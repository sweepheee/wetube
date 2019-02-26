import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join"});
}

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2) {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        // To do: Register User
        //To Do: Log user in
        res.redirect(routes.home)
    }

    console.log(req.body);
    res.render("join", { pageTitle: "Join"});
}

export const getLogin = (req, res) => res.render("Login", { pageTitle: "Login"});
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // To Do: process Log Out
    res.redirect(routes.home);
}


export const users = (req, res) => res.render("users", { pageTitle: "users"});
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword"});


