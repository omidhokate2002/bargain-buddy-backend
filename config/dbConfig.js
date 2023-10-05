import mongoose from "mongoose";

mongoose.connect(process.env.mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection Successful.");
});

connection.on("error", (err) => {
  console.error("MongoDB connection Failed.", err);
});

export default connection;
