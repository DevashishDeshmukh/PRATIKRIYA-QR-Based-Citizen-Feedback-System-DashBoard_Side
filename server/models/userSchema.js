const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

Date: {
    type : String,
    required : true,
},
Time: {
    type : String,
    required : true,
},
// Range: {
//     type : String,
//     required : true,
// },
District: {
    type : String,
    required : true,
},
SubDvision: {
    type : String,
    required : true,
},
PoliceStation: {
    type : String,
    required : true,
},
PsCode: {
    type : String,
    required : true,
},
Mobile: {
    type : String,
    required : true,
},
Ques1: {
    type : String,
    required : true,
},
Ques2: {
    type : String,
    required : true,
},
Ques3: {
    type : String,
    required : true,
},
Comment: {
    type : String,
    required : true,
},

});

//Hashing
// userSchema.pre('save', async function(next){
//     if(this.isModified('mobile_no')){
//         this.mobile_no = bcryptjs.hashSync(this.mobile_no, 10);
//     }
//     next();
// });

//Create Model
const Users = new mongoose.model("temp", userSchema);

module.exports = Users;