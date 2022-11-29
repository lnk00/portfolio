import { component$, Resource } from '@builder.io/qwik';
import Nav from '~/components/nav';
import ArticlePreview from '~/components/article_preview';
import { Article } from '~/models/article';
import { supabase } from '~/constants/supabase';
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city';

export const onGet: RequestHandler<Article[]> = async () => {
  const articles = await supabase.from('articles').select();
  return articles.data;
};

export default component$(() => {
  const articles = useEndpoint<typeof onGet>();

  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <div>
          <Nav></Nav>
          <div className="px-4 py-24">
            <div className="">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                  Recent publications
                </h2>
                <p className="mt-3 text-xl text-zinc-500 sm:mt-4">
                  These are my last publications about my works, my learnings,
                  and hobbies. don't hesitate to reach me if you want more
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
