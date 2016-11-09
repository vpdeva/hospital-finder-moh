var mongoose = require("mongoose");
var hospitalSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("hospital", hospitalSchema);
