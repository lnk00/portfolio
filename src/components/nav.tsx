import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});