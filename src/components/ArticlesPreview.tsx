import type React from "react";
import { supabase } from "../helpers/supabase";

export default function ArticlePreview(): React.ReactElement {
  supabase
    .from("articles")
    .select()
    .then((articles) => {
      console.log(articles);
    });

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
        Recent publications
      </h2>
      <p className="mt-3 text-xl text-zinc-500 sm:mt-4">
        These are my last publications about my works, my learnings, and
        hobbies. do not hesitate to reach me if you want more explanations about
        a subject I talked about.
      </p>
      <div className="h-0.5 w-full bg-zinc-100 my-12"></div>
      <div>dskj</div>
    </div>
  );
}
