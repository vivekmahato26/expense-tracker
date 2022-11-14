const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
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
    access: {
        type: String,
        required: true
    }

})

module.exports = Mongoose.model("UserModel",UserSchema);