import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16">
        <div className="flex align-center justify-between w-full pt-6">
          <div className="h-10"></div>
          <div className="flex ring-1 ring-zinc-100 rounded-full px-6 py-3 shadow-md text-sm text-zinc-800 font-medium">
            <p className="mr-6 cursor-pointer hover:text-teal-400 text-teal-400">
              Me
            </p>
            <p className="mr-6 cursor-pointer hover:text-teal-400 ">About</p>
            <p className="mr-6 cursor-pointer hover:text-teal-400">Articles</p>
            <p className="mr-6 cursor-pointer hover:text-teal-400">Projects</p>
            <p className="cursor-pointer hover:text-teal-400">Uses</p>
          </div>
          <img
            src="/images/github.png"
            alt="github logo"
            className="h-10 cursor-pointer drop-shadow-md"
          />
        </div>

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
                      Illo sint voluptas. Error voluptates culpa eligendi. Hic
                      vel totam vitae illo. Non aliquid explicabo necessitatibus
                      unde. Sed exercitationem placeat consectetur nulla
                      deserunt vel. Iusto corrupti dicta. Illo sint voluptas.
                      Error voluptates culpa eligendi. Hic vel totam vitae illo.
                      Non aliquid explicabo necessitatibus unde. Sed
                      exercitationem placeat consectetur nulla deserunt vel.
                      Iusto corrupti dicta. Hic vel totam vitae illo. Non
                      aliquid explicabo necessitatibus unde. Sed exercitationem
                      placeat consectetur nulla deserunt vel. Iusto corrupti
                      dicta.
                    </p>
                    <div className="bg-gradient-to-t from-white to-transparent h-24 w-full absolute left-0 bottom-0"></div>
                  </div>

                  <p className="text-teal-400 hover:text-teal-300 cursor-pointer mt-auto">
                    Read article
                  </p>
                </div>
              </div>
            </div>
            <p className="text-teal-400 hover:text-teal-300 text-lg cursor-pointer">
              See all the articles
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg ring-1 ring-zinc-100 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
                Stay up to date
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-zinc-300">
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-0 rounded-md ring-2 ring-zinc-100 px-5 py-3 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-400"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-400 px-5 py-3 text-base font-medium text-white shadow hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-zinc-300">
                We care about the protection of your data. Read our{" "}
                <a
                  href="#"
                  className="font-medium text-teal-400 hover:text-teal-300 underline"
                >
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-zinc-100 my-16"></div>
        <div className="flex">
          <div className="flex text-zinc-800">
            <p className="mr-6 cursor-pointer hover:text-teal-400">Me</p>
            <p className="mr-6 cursor-pointer hover:text-teal-400 ">About</p>
            <p className="mr-6 cursor-pointer hover:text-teal-400">Articles</p>
            <p className="mr-6 cursor-pointer hover:text-teal-400">Projects</p>
            <p className="cursor-pointer hover:text-teal-400">Uses</p>
          </div>
          <p className="ml-auto text-sm text-zinc-300">
            © 2022 Spencer Sharp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
});