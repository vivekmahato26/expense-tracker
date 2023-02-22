const Express = require("express");
const {json,urlencoded} = require( "express");
const cors = require( "cors");
const dotenv = require( "dotenv");
const mongoose = require('mongoose');
const auth = require("./auth");
const UserRouter = require( "./routes/user");
const ExpenseRouter = require("./routes/expense");

dotenv.config()
main().then(r=> console.log("DB Connected")).catch(err => console.log(err));

async function main() {
   await mongoose.connect(process.env.MONGO_URL);
}
const app = new Express();

app.use(cors());

app.use(json());
app.use(urlencoded({extended:false}));
app.use(auth);
app.use("/users",UserRouter);
app.use("/expenses",ExpenseRouter);

app.listen(9999,()=> console.log("server startetd at port 9999"));