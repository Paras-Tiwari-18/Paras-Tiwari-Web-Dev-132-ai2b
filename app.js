const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Review = require("./models/review");
const Query = require("./models/query");
const Listings = require("./models/listings");
const path=require("path");
const ejsMate = require("ejs-mate");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

const Mongo="mongodb://127.0.0.1:27017/icecream";
main()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
    console.log("error");
});
async function main(){
    await mongoose.connect(Mongo);
}
app.get("/home", async (req, res) => {
    const alllistings = await Listings.find({});
    res.render("layouts/boilerplate", { alllistings }); 
});
app.post("/query", async (req, res) => {
      const { name, email, message } = req.body.query;
      const newQuery = new Query({ name, email, message });
      await newQuery.save();
      res.redirect("/home");   
});
app.post("/review",async(req,res)=>{
    const { rating,comment}=req.body.review;
    const newReview = new Review({ rating,comment});
    await newReview.save();
    res.redirect("/home");
});
app.listen(8080,()=>{
    console.log("server is running on port 8080")
});