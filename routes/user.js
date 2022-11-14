const Express = require("express");
const { addUser, login, getUser } = require("../controllers/users");

const UserRouter = Express.Router();

UserRouter.post("/register", async(req,res)=> {
    const registerData = await addUser(req.body)
    res.send(registerData)
})

UserRouter.get("/:userId", async(req,res) => {
    const userData = await getUser(req.params.userId);
    res.send(userData)
})

UserRouter.post("/login", async(req,res) => {
    const loginData = await login(req.body);
    res.send(loginData)
})


module.exports  = UserRouter