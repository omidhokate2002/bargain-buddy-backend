import express from "express";
import "dotenv/config";
import "./config/dbConfig.js";
import cors from "cors";

import usersRoute from "./routes/usersRoute.js";
import productsRoute from "./routes/productsRoute.js";

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
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
