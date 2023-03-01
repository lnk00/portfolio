import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  return (
    <div className="w-full">
      <div className="lg:hidden pt-6 px-4">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <a href="https://github.com/lnk00" className="ml-auto">
            <img
              src="/images/github.png"
              alt="github logo"
              className="h-20 cursor-pointer drop-shadow-md"
            />
          </a>
        </div>
      </div>
      <div className="hidden lg:flex align-center justify-between w-full pt-6 px-4">
        <div className="h-10"></div>
        <div className="flex ring-1 ring-zinc-100 rounded-full px-6 py-3 shadow-md text-sm text-zinc-800 font-medium">
          <a
            href="/"
            className={`mr-6 cursor-pointer hover:text-teal-400 ${
              location.pathname === '/' ? 'text-teal-400' : ''
            }`}
          >
            Hey!
          </a>
          <a
            href="/about"
            className={`mr-6 cursor-pointer hover:text-teal-400 ${
              location.pathname.includes('/about') ? 'text-teal-400' : ''
            }`}
          >
            About
          </a>
          <a
            href="/articles"
            className={`mr-6 cursor-pointer hover:text-teal-400 ${
              location.pathname.includes('/article') ? 'text-teal-400' : ''
            }`}
          >
            Articles
          </a>
          <a
            href="/projects"
            className={`mr-6 cursor-pointer hover:text-teal-400 ${
              location.pathname.includes('/projects') ? 'text-teal-400' : ''
            }`}
          >
            Projects
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
    </div>
  );
});
