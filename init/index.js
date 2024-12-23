const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");

const Mongo="mongodb://127.0.0.1:27017/icecream";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(Mongo);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
