const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: { type: String, required: true }
      },
});

const Listings = mongoose.model("Listings", listingsSchema);
module.exports = Listings;
