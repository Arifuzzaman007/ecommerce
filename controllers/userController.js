const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors =  require ("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");



//register a user

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

const {name,email,password} = req.body;

const user = await User.create({

name,email,password,
avatar:{
    public_id:"this is a sample id",
    url:"profilepicUrl"
}

});

sendToken(user,201,res);
});

//LOGIN USER
exports.loginUser = catchAsyncErrors (async(req,res,next)=>{

const {email,password} =req.body;

//checking if user has given pass and email both
if(!email || !password){

return next(new ErrorHander("Please Enter Email and Password",400))

}
const user =await User.findOne({email}).select("+password");

if(!user){
return next(new ErrorHander("Invalid Email or Password",401));


}
const isPasswordMatched = user.comparePassword(password);

if(!isPasswordMatched){
    return next(new ErrorHander("Invalid Email or Password",401));
}

sendToken(user,200,res);

});


//logout user

exports.logout = catchAsyncErrors(async(req,res,next)=>{

res.cookie("token",null,{
expires:new Date(Date.now()),
httpOnly:true,

})



res.status(200).json({

success:true,
message:"Logged Out",

});


});