import { component$ } from "@builder.io/qwik";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <Nav></Nav>
        <div className="px-4 py-24 flex items-center h-full">
          <div className="flex">
            <div className="max-w-2xl mt-6">
              <p className="text-5xl font-bold text-zinc-800 leading-tight">
                I'm Damien Dumontet, I live between Paris and Montevideo.
              </p>
            </div>
            <div className="h-72 w-72 bg-zinc-800 rounded-lg shadow-xl -rotate-3">
              <img src="/images/perso-dev.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
