import { component$ } from "@builder.io/qwik";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <div>
      <p className="text-9xl">🚧</p>
      <p className="text-6xl font-bold text-zinc-800 mt-8">
        Page under construction
      </p>
      <p className="text-4xl font-semibold text-zinc-300 mt-8">
        Come back in few days to see the content !
      </p>
      <a
        className="flex items-center  cursor-pointer text-teal-400 hover:text-teal-300 mt-8"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>

        <p className="ml-2 font-semibold text-xl">Back</p>
      </a>
    </div>
  );
});