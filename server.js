const app = require ("./app");

const dotenv = require("dotenv");


const connectDatabase = require("./config/database")
// handalling uncaught exception 
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncaught exception`);
    process.exit(1);
});





//config
dotenv.config({path:"backend/config/config.env"});





connectDatabase;


app.listen(process.env.PORT,()=>{
console.log(`server is working on http://localhost:${process.env.PORT}`)

})



//unhandled promise rejection

process.on("unhandledRejection",err=>{
console.log(`Error: ${err.message}`);
console.log(`shutting down the server due to unhandled promise Rejection`);

server.close(()=>{
    process.exit(1);
});

});