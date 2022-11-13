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
          <Resource
            value={article}
            onPending={() => <div>Loading...</div>}
            onRejected={() => <div>Failed to person data</div>}
            onResolved={(article) => {
              return (
                <div
                  class="prose m-auto py-24"
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