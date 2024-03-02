const express = require ("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleWare = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());


const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);



mongoose.connect("mongodb://localhost:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Mongodb connect with server`);
    })
    .catch((err) => {
        console.error(err);
    });



app.use(errorMiddleWare);
module.exports=app