import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Converter } from "showdown";
import Nav from "~/components/nav";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const article = useResource$<string>(async () => {
    const converter = new Converter();
    const res = await fetch(
      `${process.env.SUPABASE_ARTICLES!}/${location.params.articleId}.md`
    );
    const file = await res.blob();
    const md = await file.text();
    return converter.makeHtml(md);
  });

  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 h-[1080px]">
        <div>
          <Nav></Nav>
          <a
            className="flex items-center pt-12 cursor-pointer text-teal-400 hover:text-teal-300"
            href="/"
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
          <Resource
            value={article}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Failed to person data</div>}
            onResolved={(article) => {
              return (
                <div
                  class="prose m-auto py-12"
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