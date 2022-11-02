import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center md:justify-start">
      <div class="absolute top-8 right-8 pl-1 rounded-md shadow-md cursor-pointer gradient transition-all hover:pl-2 hover:shadow-sm">
        <div class="py-2 px-4 rounded-md bg-white border">
          <span>open menu</span>
        </div>
      </div>

      <div class="max-w-6xl flex justify-between items-center">
        <div>
          <div class="flex flex-col">
            <span class="font-display text-3xl md:text-5xl font-black text-gradient">
              Nerdy !
            </span>
            <span class="text-6xl md:text-9xl lg:text-[172px] lg:leading-[172px] font-black md:-ml-2">
              Damien.
            </span>
          </div>

          <div class="text-2xl md:text-6xl font-black pb-2 mt-2 md:mb-4 md:mt-0">
            <p class="pb-4 text-gradient">Wep Developer</p>
          </div>

          <div class="bg-dark px-4 py-2 md:px-8 md:py-4 inline text-white text-sm md:text-xl font-bold rounded-md cursor-pointer shadow-md transition-all hover:shadow-sm">
            <span>Discover my projects</span>
          </div>
        </div>
      </div>
    </div>
  );
});