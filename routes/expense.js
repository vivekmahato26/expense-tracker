const Express = require("express");
const { addExpense, updateExpense, deleteExpense,expense,expenses } = require("../controllers/expense");

const ExpenseRouter = Express.Router();

ExpenseRouter.post("/add", async(req,res)=> {
    const registerData = await addExpense(req)
    res.send(registerData)
})

ExpenseRouter.put("/update/:expenseId", async(req,res) => {
    const userData = await updateExpense(req);
    res.send(userData)
})
ExpenseRouter.delete("/delete/:expenseId", async(req,res) => {
    const userData = await deleteExpense(req);
    res.send(userData)
})
ExpenseRouter.get("/get/:expenseId", async(req,res) => {
    const userData = await expense(req);
    res.send(userData)
})

ExpenseRouter.get("/", async(req,res) => {
    const loginData = await expenses(req);
    res.send(loginData)
})


module.exports  = ExpenseRouter