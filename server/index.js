import express from "express";
import dotenv from "dotenv";
import color from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./src/Config/db.js";
import route from "./src/Routes/UserRoutes.js";
const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allow all methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow common headers
    credentials: true, // If cookies or HTTP credentials are needed
  })
);
app.use("/api", route);

if (process.env.ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send(
    `${process.env.APP_NAME || "Test APP"} API is Working on ${
      process.env.ENV
    }.....`
  );
});

app.listen(PORT, () => {
  console.log(
    `Server has started on http://localhost:${PORT}`.white.bgYellow.bold
  );
});
