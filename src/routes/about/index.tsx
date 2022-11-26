import { component$ } from "@builder.io/qwik";
import Foot from "~/components/foot";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <Nav></Nav>
        <div className="px-4 py-24 flex items-center h-full">
          <div className="flex">
            <div className="max-w-xl mt-6 mr-16">
              <p className="text-5xl font-bold text-zinc-800 leading-tight mb-8">
                I'm Damien Dumontet, I live between Paris and Montevideo.
              </p>
              <p className="text-justify text-zinc-500">
                I am a passionate software engineer with 10 years of experience
                in crafting software and website both profesionally and in my
                free time. I have worked on several projects using modern
                fontend frameworks like React and Angular but also love working
                with lower level technologies like C++ and Rust.
                <br /> <br /> I pay attention to good UI and UX, so the code I
                write try to respect the eyes and the mind of the users. Adept
                of TDD and DDD, the code I write is always clean and readable.
                <br /> <br />I love traveling and being out of my comfort zone,
                which is why I work remotely so that I can spend time exploring
                new places while I work on amazing project.
                <br /> <br />I have different hobbies going from 3D modelization
                with software like blender to aviation simulation but i'll not
                talk about these hobbies to much now, i'll let you discover them
                reading my blog articles !
              </p>
            </div>
            <div className="w-full bg-zinc-800 rounded-lg shadow-xl mb-auto rotate-3 flex-shrink-[10]">
              <img src="/images/perso-dev.png" />
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-zinc-100 mb-16"></div>
        <Foot></Foot>
      </div>
    </div>
  );
});
