const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
           trim:true
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
         maxLength : [8,"Price can not exceed 8 caracters"]
    },
    rating:{
        type:Number,
        default:0
       

    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
    ],
    catagory:{
        type:String,
        required:[true,"please enter product catagory"],


    },
    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"Stock can not exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }

    }
],

   user:{
type:mongoose.Schema.ObjectId,
ref:"User",
required:true,


   },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",productSchema);