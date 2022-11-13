import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="flex align-center justify-between w-full pt-6">
      <div className="h-10"></div>
      <div className="flex ring-1 ring-zinc-100 rounded-full px-6 py-3 shadow-md text-sm text-zinc-800 font-medium">
        <a
          href="/"
          className={`mr-6 cursor-pointer hover:text-teal-400 ${
            location.pathname === "/" ? "text-teal-400" : ""
          }`}
        >
          Hey!
        </a>
        <a
          href="/"
          className={`mr-6 cursor-pointer hover:text-teal-400 ${
            location.pathname.includes("/about") ? "text-teal-400" : ""
          }`}
        >
          About
        </a>
        <a
          href="/articles"
          className={`mr-6 cursor-pointer hover:text-teal-400 ${
            location.pathname.includes("/article") ? "text-teal-400" : ""
          }`}
        >
          Articles
        </a>
        <a
          href="/"
          className={`mr-6 cursor-pointer hover:text-teal-400 ${
            location.pathname.includes("/projects") ? "text-teal-400" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="/"
          className={`cursor-pointer hover:text-teal-400 ${
            location.pathname.includes("/uses") ? "text-teal-400" : ""
          }`}
        >
          Uses
        </a>
      </div>
      <a href="https://github.com/lnk00">
        <img
          src="/images/github.png"
          alt="github logo"
          className="h-10 cursor-pointer drop-shadow-md"
        />
      </a>
    </div>
  );
});