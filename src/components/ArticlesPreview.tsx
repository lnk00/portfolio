import type React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../helpers/supabase";
import dayjs from "dayjs";

interface IArticle {
  id: number;
  title: string;
  overview: string;
  img: string;
  created_at: string;
}

interface ArticleProps {
  article: IArticle;
}

function Article(props: ArticleProps): React.ReactElement {
  return (
    <div className="flex-col sm:flex sm:flex-row sm:h-44 not-last:mb-16">
      <img
        src={`${import.meta.env.PUBLIC_SUPABASE_IMAGES}/${props.article.img}`}
        alt="abstract"
        className="h-44 sm:w-44 shrink-0 rounded-lg shadow-lg"
      />
      <div className="h-64 mt-4 sm:mt-0 sm:ml-8 sm:h-full flex flex-col">
        <div className="flex items-center mb-2">
          <div className="h-4 w-0.5 bg-zinc-200 mr-2"></div>
          <p className="text-sm text-zinc-400">
            {dayjs(props.article.created_at).format("MMMM DD, YYYY")}
          </p>
        </div>

        <p className="text-xl text-zinc-800 font-semibold mb-2">
          {props.article.title}
        </p>

        <div className="text-ellipsis overflow-hidden relative">
          <p className="text-zinc-400 text-md">{props.article.overview}</p>
          <div className="bg-gradient-to-t from-white to-transparent h-24 w-full absolute left-0 bottom-0"></div>
        </div>

        <a
          className="flex items-center text-teal-400 hover:text-teal-300 cursor-pointer mt-auto"
          href={`/article/${props.article.title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("'", "")}`}
        >
          <p className="mr-2">Read article</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ArticlePreview(): React.ReactElement {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    supabase
      .from("articles")
      .select()
      .then((res) => {
        setArticles(res.data as IArticle[]);
      });
  }, []);

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
      <div className="h-0.5 w-full bg-zinc-100 my-16"></div>
      {articles.map((article) => (
        <Article article={article} key={article.id}></Article>
      ))}
    </div>
  );
}
