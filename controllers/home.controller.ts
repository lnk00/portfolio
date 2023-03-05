import { supabase } from "../constants/supabase";
import dayjs from "dayjs";
import { Response, Request } from "express";

const dateFormatter = (date: Date) => {
  return dayjs(date).format("MMMM DD, YYYY");
};

const linkFormatter = (link: string) => {
  return link.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");
};

export default async (_: Request, res: Response) => {
  const articles = await supabase.from("articles").select();
  res.render("pages/index", {
    formatDate: dateFormatter,
    formatLink: linkFormatter,
    img_url: process.env.SUPABASE_IMAGES,
    articles: articles.data,
  });
};
