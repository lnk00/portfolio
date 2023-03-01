import { component$ } from '@builder.io/qwik';
import Foot from '~/components/foot';
import Nav from '~/components/nav';

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
                in developing software and websites, both professionally and in
                my free time. I have worked on several projects using modern
                frontend frameworks such as React and Angular, as well as
                lower-level technologies like C++ and Rust.
                <br /> <br />I prioritize good UI and UX, ensuring that the code
                I write respects the users' eyes and minds. I am an adept of TDD
                and DDD, meaning that the code I write is always clean and
                readable.
                <br /> <br />I enjoy traveling and stepping out of my comfort
                zone, which is why I work remotely. This allows me to explore
                new places while working on exciting projects.
                <br /> <br />
                In my free time, I have various hobbies, including 3D modeling
                with software like Blender and aviation simulation. I invite you
                to discover more about these hobbies by reading my blog
                articles!
              </p>
            </div>
            <img src="/images/wink.png" className="h-72 drop-shadow-2xl" />
          </div>
        </div>
        <div className="h-0.5 w-full bg-zinc-100 mb-16"></div>
        <Foot></Foot>
      </div>
    </div>
  );
});
