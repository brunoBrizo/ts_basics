import express from "express";
import env from "dotenv";
import userRoutes from "./routes/user_routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(userRoutes);

app.listen(3300);
