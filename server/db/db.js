const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://ravikumawat14:IVz62v6Xuh4Vaj7n@rk.7yaxnaf.mongodb.net/test"
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
};

module.exports = { connectDB };