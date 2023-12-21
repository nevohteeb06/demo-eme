const mongoose = require("mongoose");
console.log('MongoDB URI:', process.env.MONGO_URI);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
  }
);

mongoose.connection.on("connected", () => console.log("mongoDB connected"));

module.exports = mongoose;
