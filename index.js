import express from "express";
import "dotenv/config";
import "./config/dbConfig.js";
import usersRoute from "./routes/usersRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
