import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="mt-16">
      <div className="rounded-lg ring-1 ring-zinc-100 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
            Stay up to date
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-zinc-300">
            Get notified when I publish something new, and unsubscribe at any
            time.
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
  );
});