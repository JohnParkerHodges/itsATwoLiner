const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actSchema = new Schema({
    title: String
});
const act = mongoose.model("act", actSchema);


module.exports = act;