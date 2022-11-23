const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
   
const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

const Users = require('./models/userSchema');

//this method is used to get data and cookie from frontend
app.use(express.json());  
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());
    
// app.get("/products", (req, res) => { 
//     Users.find((err, docs) => {
//      if(!err){
//         res.send(docs);
//      }else{
//         console.log("Error in retrieving employee list :" +err);
//      }
//     }).lean();
// });

app.get("/products", (req, res) => { 
    Users.find({}, function(err, docs) {
     if(!err){
        res.send(docs);
        console.log(docs);
     }else{
        console.log("Error in retrieving employee list :" +err);
     }
    }).lean();
});

app.get("/feedback", (req, res) => {
    Users.find({}, function(err, docs) {
     if(!err){
        res.json(docs);   
        console.log(docs);
     }else{
        console.log("Error in retrieving employee list :" +err);
     }
    }).lean();
});

 let district = "";
 let subdivision = "";
 let policestation = "";
 let fromdate = "";
 let todate = "";

app.post("/", (req, res) => {
    district = req.body.dist;
    subdivision = req.body.subdiv;
    policestation = req.body.polsta;
    fromdate = req.body.fromd;
    todate = req.body.tod;
    // console.log(district);
    // console.log(subdivision);  
    // console.log(policestation);
    // console.log(fromdate);
    // console.log(todate);
})

app.get("/", (req, res) => {
    let query;
    if(district != "" && subdivision=="" &&  policestation=="" && fromdate=="" && todate==""){
      query = {"District": district}; 
    }
    else if(district == "" && subdivision !="" &&  policestation=="" && fromdate=="" && todate==""){
      query = {"SubDvision": subdivision}; 
    }
    else if(district == "" && subdivision =="" &&  policestation !="" && fromdate=="" && todate==""){
      query = {"PoliceStation": policestation}; 
    }
    else if(district == "" && subdivision =="" &&  policestation == "" && fromdate !="" && todate != ""){
      query = {Date: { $gt: fromdate, $lt: todate}}; 
    }
    else if(district != "" && subdivision !="" &&  policestation =="" && fromdate=="" && todate==""){
      query = {$and: [{"District": district},{"SubDvision": subdivision},]}; 
    }
    else if(district != "" && subdivision =="" &&  policestation !="" && fromdate=="" && todate==""){
      query = {$and: [{"District": district},{"PoliceStation": policestation},]}; 
    }
    else if(district != "" && subdivision =="" &&  policestation =="" && fromdate!="" && todate !=""){
      query = {$and: [{"District": district},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district == "" && subdivision !="" &&  policestation !="" && fromdate=="" && todate==""){
      query = {$and: [{"SubDvision": subdivision},{"PoliceStation": policestation},]}; 
    }
    else if(district == "" && subdivision !="" &&  policestation =="" && fromdate !="" && todate !=""){
      query = {$and: [{"SubDvision": subdivision},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district == "" && subdivision =="" &&  policestation !="" && fromdate !="" && todate !=""){
      query = {$and: [{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district != "" && subdivision !="" &&  policestation =="" && fromdate !="" && todate !=""){
      query = {$and: [{"District": district},{"SubDvision": subdivision},{"PoliceStation": policestation},]}; 
    }
    else if(district != "" && subdivision !="" &&  policestation =="" && fromdate !="" && todate !=""){
      query = {$and: [{"District": district},{"SubDvision": subdivision},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district != "" && subdivision =="" &&  policestation !="" && fromdate !="" && todate !=""){
      query = {$and: [{"District": district},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district == "" && subdivision !="" &&  policestation !="" && fromdate !="" && todate !=""){
      query = {$and: [{"SubDvision": subdivision},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    else if(district != "" && subdivision !="" &&  policestation !="" && fromdate !="" && todate !=""){
      query = {$and: [{"District": district},{"SubDvision": subdivision},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]}; 
    }
    // const query = {
    //     $or:[  
            
    //         {$and: [{"District": district},{"SubDvision": subdivision},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"District": district},{"SubDvision": subdivision},{"PoliceStation": policestation},]},
    //         {$and: [{"District": district},{"SubDvision": subdivision},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"District": district},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"SubDvision": subdivision},{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"District": district},{"SubDvision": subdivision},]},
    //         {$and: [{"District": district},{"PoliceStation": policestation},]},
    //         {$and: [{"District": district},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"SubDvision": subdivision},{"PoliceStation": policestation},]},
    //         {$and: [{"SubDvision": subdivision},{Date: { $gt: fromdate, $lt: todate}},]},
    //         {$and: [{"PoliceStation": policestation},{Date: { $gt: fromdate, $lt: todate}},]},

    //         // {"District": district},
    //         //  {"SubDvision": subdivision},
    //         //  {"PoliceStation": policestation},
    //         //  {Date: { $gt: fromdate, $lt: todate}},
    //      ]}
    Users.find(query, function(err, docs) {
     if(!err){
        res.send(docs);
     }else{
        console.log("Error in retrieving employee list :" +err);
     }
    }).lean();

});

app.listen(port, ()=>{
    console.log("Server is Running Successfully.")
});