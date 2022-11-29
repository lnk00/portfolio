import { component$ } from '@builder.io/qwik';
import { Article } from '~/models/article';
import dayjs from 'dayjs';

interface ArticlePreviewProps {
  article: Article;
}

export default component$((props: ArticlePreviewProps) => {
  return (
    <div className="flex h-44 mb-16">
      <img
        src={`${process.env.SUPABASE_IMAGES!}/${props.article.img}`}
        alt="abstract"
        className="h-44 w-44 shrink-0 rounded-lg shadow-lg"
      />
      <div className="ml-8 flex flex-col h-full">
        <div className="flex items-center mb-2">
          <div className="h-4 w-0.5 bg-zinc-200 mr-2"></div>
          <p className="text-sm text-zinc-400">
            {dayjs(props.article.created_at).format('MMMM DD, YYYY')}
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
            .replaceAll(' ', '-')
            .replaceAll("'", '')}`}
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
});
