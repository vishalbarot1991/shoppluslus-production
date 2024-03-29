import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import CategoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./app/build")));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./app/build/html"));
});
//port
const PORT = process.env.PORT || 8080;

//app listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgCyan.white);
});
