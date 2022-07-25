const mongoose = require("mongoose");

const userSubmitSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   phone: {
      type: Number,
      required: true,
   },
   adress: {
      type: String,
      required: true,
   },
   orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
},{timestamps:true});

const userSubmit = mongoose.model("product", userSubmitSchema);

module.exports = userSubmit;
