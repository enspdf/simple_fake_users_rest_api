const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://flutternode:flutternode123@ds157946.mlab.com:57946/flutter-node-users", {
    useNewUrlParser: true
  });

  console.log("Database: Connected");
}

module.exports = { connect };