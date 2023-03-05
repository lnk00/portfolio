import express from "express";
import dotenv from "dotenv";
import homeController from "./controllers/home.controller";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", homeController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
