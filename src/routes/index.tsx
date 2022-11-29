import { component$, Resource } from '@builder.io/qwik';
import ArticlePreview from '~/components/article_preview';
import Nav from '~/components/nav';
import Foot from '~/components/foot';
import Newsletter from '~/components/newsletter';
import { supabase } from '~/constants/supabase';
import { Article } from '~/models/article';
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city';

export const onGet: RequestHandler<Article[]> = async () => {
  const articles = await supabase.from('articles').select();
  return articles.data;
};

export default component$(() => {
  const articles = useEndpoint<typeof onGet>();

  console.log('ok');

  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16">
        <Nav></Nav>
        <div className="py-24 px-4">
          <div className="inline-block h-20 w-20 rounded-full ring-2 ring-zinc-100 overflow-hidden shadow-lg">
            <img
              className="h-full mt-1"
              src="/images/perso.jpeg"
              alt="perso logo"
            />
          </div>
          <div className="max-w-2xl mt-6">
            <p className="text-6xl font-bold text-zinc-800 leading-tight">
              Software engineer, doer, and creative developer.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                Recent publications
              </h2>
              <p className="mt-3 text-xl text-zinc-500 sm:mt-4">
                These are my last publications about my works, my learnings, and
                hobbies. don't hesitate to reach me if you want more
                explanations about a subject I talked about.
              </p>
            </div>
            <div className="h-0.5 w-full bg-zinc-100 mt-14 mb-16"></div>
            <div>
              <Resource
                value={articles}
                onPending={() => <div>Loading...</div>}
                onRejected={() => <div>Failed to person data</div>}
                onResolved={(articles) => {
                  return (
                    <div>
                      {articles?.map((article) => (
                        <ArticlePreview article={article}></ArticlePreview>
                      ))}
                    </div>
                  );
                }}
              ></Resource>
            </div>
            <a
              href="/articles"
              className="text-teal-400 hover:text-teal-300 text-lg cursor-pointer"
            >
              See all the articles
            </a>
          </div>
        </div>
        <Newsletter></Newsletter>
        <div className="h-0.5 w-full bg-zinc-100 my-16"></div>
        <Foot></Foot>
      </div>
    </div>
  );
});
