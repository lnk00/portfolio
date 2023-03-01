import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div className="flex">
      <div className="flex text-zinc-800">
        <a className="mr-6 cursor-pointer hover:text-teal-400" href="/">
          Hey
        </a>
        <a className="mr-6 cursor-pointer hover:text-teal-400" href="/about">
          About
        </a>
        <a className="mr-6 cursor-pointer hover:text-teal-400" href="/articles">
          Articles
        </a>
        <a className="mr-6 cursor-pointer hover:text-teal-400" href="/projects">
          Projects
        </a>
      </div>
      <p className="ml-auto text-sm text-zinc-300">
        © 2023 Damien Dumontet. All rights reserved.
      </p>
    </div>
  );
});
