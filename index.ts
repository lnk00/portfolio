import express from "express";
import dotenv from "dotenv";
import { supabase } from "./constants/supabase";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const articles = await supabase.from("articles").select();
  res.render("pages/index", {
    articles: articles.data,
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
