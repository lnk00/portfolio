import { component$ } from "@builder.io/qwik";
import { Article } from "~/models/article";
import dayjs from "dayjs";

interface ArticlePreviewProps {
  article: Article;
}

export default component$((props: ArticlePreviewProps) => {
  return (
    <div className="flex h-44 mb-16">
      <img
        src={props.article.img}
        alt="abstract"
        className="h-44 w-44 shrink-0 rounded-xl shadow-lg"
      />
      <div className="ml-8 flex flex-col h-full">
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

        <p className="text-teal-400 hover:text-teal-300 cursor-pointer mt-auto">
          Read article
        </p>
      </div>
    </div>
  );
});