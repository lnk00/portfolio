import { component$ } from '@builder.io/qwik';
import CardRow from '~/components/card_row';
import Foot from '~/components/foot';
import Nav from '~/components/nav';
import { Project } from '~/models/project';

export default component$(() => {
  const project1: Project = {
    title: 'Oney',
    sub_title: 'Banking mobile app',
    mockup: '/images/mockup-oney.png',
    main_icon: '/images/pig.png',
    secondary_icon: '/images/money.png',
  };

  const project2: Project = {
    title: 'Birthd',
    sub_title: 'Birthday mobile app',
    mockup: '/images/mockup-birthd.png',
    main_icon: '/images/gift.png',
    secondary_icon: '/images/smiley.png',
  };

  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <Nav></Nav>
        <div className="px-4 py-24">
          <div className="">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl">
                Work projects
              </h2>
              <p className="mt-3 text-xl text-zinc-500 sm:mt-4">
                These are a quick presentations of the work i've done during the
                past few years.
              </p>
            </div>
            <div className="h-0.5 w-full bg-zinc-100 mt-14 mb-16"></div>
            <div className="flex flex-col gap-8">
              <CardRow
                rowId="row-1"
                card1={project1}
                card2={project2}
              ></CardRow>
            </div>
            <div className="w-full h-72 bg-zinc-50 rounded-lg mt-8 mb-8 flex items-center justify-center relative">
              <p className="text-zinc-800 text-3xl font-bold">
                More incoming ...
              </p>
            </div>
            <div className="h-0.5 w-full bg-zinc-100 mb-16"></div>
            <Foot></Foot>
          </div>
        </div>
      </div>
    </div>
  );
});
