import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});