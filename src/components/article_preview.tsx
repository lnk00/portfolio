import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="flex h-44 mb-16">
      <img
        src="/images/abstract.jpg"
        alt="abstract"
        className="h-44 w-44 shrink-0 rounded-xl shadow-lg"
      />
      <div className="ml-8 flex flex-col h-full">
        <div className="flex items-center mb-2">
          <div className="h-4 w-0.5 bg-zinc-200 mr-2"></div>
          <p className="text-sm text-zinc-400">November 12, 2022</p>
        </div>

        <p className="text-xl text-zinc-800 font-semibold mb-2">
          How and why i build my own blog
        </p>

        <div className="text-ellipsis overflow-hidden relative">
          <p className="text-zinc-400 text-md">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta. Illo sint voluptas. Error voluptates culpa eligendi.
            Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.
            Sed exercitationem placeat consectetur nulla deserunt vel. Iusto
            corrupti dicta. Hic vel totam vitae illo. Non aliquid explicabo
            necessitatibus unde. Sed exercitationem placeat consectetur nulla
            deserunt vel. Iusto corrupti dicta.
          </p>
          <div className="bg-gradient-to-t from-white to-transparent h-24 w-full absolute left-0 bottom-0"></div>
        </div>

        <p className="text-teal-400 hover:text-teal-300 cursor-pointer mt-auto">
          Read article
        </p>
      </div>
    </div>
  );
});