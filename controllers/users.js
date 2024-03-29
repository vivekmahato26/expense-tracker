const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Crpyto = require("crypto-js");


exports.addUser = async (data) => {
    try {
        const checkUser = await UserModel.find({ email: data.email });
        if (checkUser.length) {
            throw new Error("User Already Registered!!!");
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(data.password, salt);
        data.password = hash;
        data.createdAt = new Date();
        data.updatedAt = new Date();
        const userAddData = await UserModel.create(data);
        return userAddData;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

exports.login = async (data) => {
    try {
        const checkUser = await UserModel.find({ email: data.email });
        if (!checkUser.length) {
            throw new Error("User Not Registered!!!");
        }
        const checkHash = await bcrypt.compare(data.password, checkUser[0].password);
        console.log(checkHash);
        if (!checkHash) {
            throw new Error("Wrong Email Password Combination!!!");
        }
        const userId = checkUser[0]._id.toString();
        let authData = {
            userId,
            email: checkUser[0].email,
            access: checkUser[0].access,
        };
        console.log(JSON.stringify(authData));
        let token;
        try {
             token = Crpyto.AES.encrypt(JSON.stringify(authData), process.env.JWT_KEY).toString()
        } catch (error) {
            console.log(error);
        }
        console.log(token);
        return { ...authData, token };
    } catch (error) {
        return error.message
    }
}

exports.getUser = async (userId) => {
    try {
        const userData = await UserModel.findById(userId);
        return userData;
    } catch (error) {
        return error.message
    }
}