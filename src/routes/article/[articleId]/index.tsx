import { component$, Resource } from '@builder.io/qwik';
import { Converter } from 'showdown';
import Nav from '~/components/nav';
import { RequestHandler, useEndpoint } from '@builder.io/qwik-city';
import showdownHighlight from 'showdown-highlight';

export const onGet: RequestHandler<string> = async ({ params }) => {
  const converter = new Converter({
    extensions: [showdownHighlight({ pre: true })],
  });
  const res = await fetch(
    `${process.env.SUPABASE_ARTICLES!}/${params.articleId}.md`
  );
  const file = await res.blob();
  const md = await file.text();
  return converter.makeHtml(md);
};

export default component$(() => {
  const article = useEndpoint<typeof onGet>();

  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <div>
          <Nav></Nav>
          <div className="m-auto max-w-prose pt-12 px-4">
            <a
              className="flex items-center  cursor-pointer text-teal-400 hover:text-teal-300 "
              href="/articles"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="ml-2">All articles</p>
            </a>
          </div>

          <Resource
            value={article}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Failed to person data</div>}
            onResolved={(article) => {
              return (
                <div
                  class="prose prose-zinc prose-p:text-justify prose-img:rounded-lg prose-img:shadow-lg m-auto py-12 px-4"
                  dangerouslySetInnerHTML={article}
                ></div>
              );
            }}
          ></Resource>
        </div>
      </div>
    </div>
  );
});
