import { component$ } from "@builder.io/qwik";
import ArticlePreview from "~/components/article_preview";
import Nav from "~/components/nav";
import Foot from "~/components/foot";
import Newsletter from "~/components/newsletter";

export default component$(() => {
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
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </div>
            <div className="h-0.5 w-full bg-zinc-100 mt-14 mb-16"></div>
            <div>
              <ArticlePreview></ArticlePreview>
            </div>
            <p className="text-teal-400 hover:text-teal-300 text-lg cursor-pointer">
              See all the articles
            </p>
          </div>
        </div>
        <Newsletter></Newsletter>
        <div className="h-0.5 w-full bg-zinc-100 my-16"></div>
        <Foot></Foot>
      </div>
    </div>
  );
});