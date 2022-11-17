const Mongoose = require("mongoose");
const UserModel = require("./users");

const ExpenseSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    transactionDetails: {
        type: Mongoose.SchemaTypes.Mixed,
        required: true
    },
    transactionAccount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Mongoose.SchemaTypes.Date,
        required: true
    },
    updatedAt: {
        type: Mongoose.SchemaTypes.Date, 
        required: true
    },
    creator : {
        type: Mongoose.SchemaTypes.ObjectId,
        ref: UserModel,
        required: true
    },
    amount: {
        type : Number,
        required: true
    },
    img: {
        type : Number,
        required: false
    }


})

module.exports = new Mongoose.model("ExpenseModel",ExpenseSchema);