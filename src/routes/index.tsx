import { component$ } from "@builder.io/qwik";
import { assets } from "~/constants";
import LottieComponent from "~/components/lottie.component";

export default component$(() => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-[128px] flex justify-center md:block">
      <div class="absolute top-8 right-8 pl-1 rounded-md shadow-md cursor-pointer gradient transition-all hover:pl-2 hover:shadow-sm">
        <div class="py-2 px-4 rounded-md bg-white border">
          <span>open menu</span>
        </div>
      </div>

      <div class="max-w-6xl flex justify-between items-center">
        <div class="">
          <div class="flex flex-col">
            <span class="font-display text-3xl md:text-5xl font-black text-gradient">
              Nerdy !
            </span>
            <span class="text-6xl md:text-9xl lg:text-[172px] lg:leading-[172px] font-black md:-ml-2">
              Damien.
            </span>
          </div>

          <div class="text-2xl md:text-6xl font-black pb-2 mt-2 md:mt-0">
            <p class="pb-4 text-gradient">Web Developer</p>
          </div>

          <div className="inline-block pl-2 text-sm md:text-xl font-bold rounded-md shadow-md cursor-pointer gradient transition-all hover:pl-4 hover:shadow-sm">
            <div className="rounded-md bg-white border flex items-center">
              <span class="pl-4 pr-1 py-2 md:pl-8 md:pr-2 md:py-4">
                Discover my projects
              </span>
              <LottieComponent
                class="w-14 h-14 mr-3"
                data={assets.rocket}
              ></LottieComponent>
            </div>
          </div>
        </div>

        <LottieComponent
          class="w-[600px] -ml-[200px] -z-10 hidden md:inline"
          data={assets.developer}
        ></LottieComponent>
      </div>
    </div>
  );
});