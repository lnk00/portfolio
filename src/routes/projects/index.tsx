import { component$, $ } from '@builder.io/qwik';
import Foot from '~/components/foot';
import Nav from '~/components/nav';

export default component$(() => {
  const onHover = $(() => {
    const mockupL = document.querySelectorAll<HTMLElement>('#lol .mockup-l')[0];
    mockupL!.style.marginTop = '18rem';
    mockupL!.style.transitionDelay = '0ms';

    const mockupS = document.querySelectorAll<HTMLElement>('#lol .mockup-s')[0];
    mockupS!.style.marginTop = '1.5rem';
    mockupS!.style.transitionDelay = '500ms';

    const icon1 = document.querySelectorAll<HTMLElement>('#lol .icon-1')[0];
    icon1!.style.top = '-6rem';
    icon1!.style.transitionDelay = '0ms';

    const icon2 = document.querySelectorAll<HTMLElement>('#lol .icon-2')[0];
    icon2!.style.left = '-8rem';
    icon2!.style.transitionDelay = '200ms';
  });

  const onLeave = $(() => {
    const mockupL = document.querySelectorAll<HTMLElement>('#lol .mockup-l')[0];
    mockupL!.style.marginTop = '-3.5rem';
    mockupL!.style.transitionDelay = '500ms';

    const mockupS = document.querySelectorAll<HTMLElement>('#lol .mockup-s')[0];
    mockupS!.style.marginTop = '14rem';
    mockupS!.style.transitionDelay = '0ms';

    const icon1 = document.querySelectorAll<HTMLElement>('#lol .icon-1')[0];
    icon1!.style.top = '2rem';
    icon1!.style.transitionDelay = '600ms';

    const icon2 = document.querySelectorAll<HTMLElement>('#lol .icon-2')[0];
    icon2!.style.left = '8rem';
    icon2!.style.transitionDelay = '650ms';
  });

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
            <div className="flex gap-8">
              <div
                onMouseEnter$={onHover}
                onMouseLeave$={onLeave}
                className="group h-72 w-1/3 bg-teal-400 rounded-lg shadow-lg shrink-0 hover:w-2/3 transition-all duration-300 p-4 overflow-hidden relative delay-300 hover:delay-[400ms] cursor-pointer"
              >
                <div className="flex">
                  <div>
                    <p className="text-white font-bold text-3xl">Oney</p>
                    <p className="text-white font-semibold text-xl opacity-70 mt-2">
                      Banking mobile app
                    </p>
                  </div>
                  <a className="ml-auto cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/mockup-oney.png"
                    className="h-56 rotate-12 flex mt-6 group-hover:mt-52 transition-all duration-300 mr-auto delay-500 group-hover:delay-[0ms]"
                  />
                  <img
                    src="/images/mockup-oney.png"
                    className="h-72 mt-72 group-hover:-mt-14 transition-all duration-300 group-hover:delay-500 mr-auto"
                  />
                  <img
                    src="/images/pig.png"
                    className="icon-1 absolute -top-36 group-hover:top-8 right-16 h-24 rotate-[20deg] transition-all duration-300 drop-shadow-lg group-hover:delay-[600ms] delay-[0ms]"
                  />
                  <img
                    src="/images/money.png"
                    className="icon-2 absolute bottom-14 -left-32 group-hover:left-32 h-24 -rotate-12 transition-all duration-300 drop-shadow-lg group-hover:delay-[650ms] delay-200"
                  />
                </div>
                <a className="text-white text-lg font-semibold absolute bottom-2 right-4 flex items-center cursor-pointer">
                  <p className="mr-2">Read more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div
                id="lol"
                className="h-72 w-full bg-teal-700 rounded-lg shadow-lg cursor-pointer p-4 overflow-hidden relative"
              >
                <div className="flex">
                  <div>
                    <p className="text-white font-bold text-3xl">Birthd</p>
                    <p className="text-white font-semibold text-xl opacity-70 mt-2">
                      Birthday mobile app
                    </p>
                  </div>
                  <a className="ml-auto cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/images/mockup-birthd.png"
                    className="mockup-s h-56 rotate-12 flex mt-52 transition-all duration-300 mr-auto"
                  />

                  <img
                    src="/images/mockup-birthd.png"
                    className="mockup-l h-72 -mt-14 transition-all duration-300 mr-auto"
                  />
                </div>
                <img
                  src="/images/gift.png"
                  className="icon-1 absolute top-8 right-16 h-24 rotate-[20deg] transition-all duration-300 drop-shadow-lg"
                />
                <img
                  src="/images/smiley.png"
                  className="icon-2 absolute bottom-14 left-32 h-24 -rotate-12 transition-all duration-300 drop-shadow-lg"
                />

                <a className="text-white text-lg font-semibold absolute bottom-2 right-4 flex items-center cursor-pointer">
                  <p className="mr-2">Read more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
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
