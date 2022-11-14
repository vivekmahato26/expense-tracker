const ExpenseModel = require("../models/expense");

exports.addExpense = async (req) => {
    try {
        // if(req.isAuth) {
            const data = req.body;
            data.createdAt = new Date();
            data.updatedAt = new Date();
            // data.creator = req.userId;
            const expenseData = await ExpenseModel.create(data)
            return expenseData
        // } else {
        //     throw new Error("User not logged in!!!")
        // }
    } catch (error) {
        return error.message
    }
}
exports.updateExpense = async (req) => {
    try {
        // if(req.isAuth) {
            const expenseData = await ExpenseModel.findByIdAndUpdate(req.params.expenseId,req.body,{upsert:false})
            return expenseData
        // } else {
        //     throw new Error("User not logged in!!!")
        // }
    } catch (error) {
        return error.message
    }
}
exports.deleteExpense = async (req) => {
    try {
        if(req.isAuth) {
            const expenseData = await ExpenseModel.create(req.body)
            return expenseData
        } else {
            throw new Error("User not logged in!!!")
        }
    } catch (error) {
        return error.message
    }
}
exports.expense = async (req) => {
    try {
        if(req.isAuth) {
            const expenseData = await ExpenseModel.findById(req.params.expenseId)
            return expenseData
        } else {
            throw new Error("User not logged in!!!")
        }
    } catch (error) {
        return error.message
    }
}
exports.expenses = async (req) => {
    try {
        if(req.isAuth) {
            const expenseData = await ExpenseModel.find()
            return expenseData
        } else {
            throw new Error("User not logged in!!!")
        }
    } catch (error) {
        return error.message
    }
}