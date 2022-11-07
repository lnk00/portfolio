import { component$ } from "@builder.io/qwik";
import { assets } from "~/constants";
import LottieComponent from "~/components/lottie.component";

export const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const people = [
  {
    name: "Oney+",
    role: "Front-end Developer",
    imageUrl: "images/oney-logo.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "RATP SMart System",
    role: "Front-end Developer",
    imageUrl: "images/ratp-logo.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Advanced Schema",
    role: "Front-end Developer",
    imageUrl: "images/advanced-logo.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default component$(() => {
  return (
    <div class="mx-8">
      <div className="container mx-auto pt-44 pb-32 flex">
        <div className="max-w-6xl flex justify-between items-center">
          <div className="">
            <div className="flex flex-col">
              <span className="font-display text-3xl md:text-5xl font-black text-gradient mb-2">
                Nerdy !
              </span>
              <span className="text-6xl md:text-9xl lg:text-[172px] lg:leading-[172px] font-black md:-ml-2 mb-2">
                Damien.
              </span>
            </div>

            <div className="text-2xl md:text-6xl font-black mb-4 mt-2 md:mt-0">
              <p className="pb-4 text-gradient">Software engineer</p>
            </div>

            <div className="inline-block pl-2 text-sm md:text-xl font-bold rounded-md shadow-md cursor-pointer gradient transition-all hover:pl-4 hover:shadow-sm">
              <div className="rounded-md bg-white border flex items-center">
                <span className="pl-4 pr-1 py-2 md:pl-8 md:pr-2 md:py-4">
                  Read my blog articles
                </span>
                <LottieComponent
                  class="w-14 h-14 mr-3"
                  data={assets.rocket}
                ></LottieComponent>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 rounded-lg gradient mb-32 shadow-2xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Passionate developer with tons of hobbies.
          </h2>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white opacity-50">
              Of experience
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              5+ years
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white opacity-50">
              Specialist
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              Frontend
            </dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white opacity-50">
              Lover
            </dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">
              Remote
            </dd>
          </div>
        </dl>
      </div>

      <div class="mb-32">
        <div className="container mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-6xl font-bold">I Worked with</h2>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 bg-white shadow-md rounded-lg p-4">
                    <div className="aspect-w-3 aspect-h-2 relative">
                      <img
                        className="rounded-lg object-cover shadow-lg absolute"
                        src={assets.abstract}
                        alt=""
                      />
                      <div className="mx-auto w-[96%] h-[95%] top-[50%] -translate-y-[50%] flex items-center justify-center">
                        <div class="rounded-lg bg-dark opacity-50 h-full w-full absolute -z-10"></div>
                        <img
                          src={person.imageUrl}
                          alt="logo oney"
                          class="max-h-[50%] max-w-[50%] brightness-0 invert"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-gradient">{person.role}</p>
                        <div class="h-1"></div>
                        <p className="text-sm font-medium px-3 py-1 text-gray-400 bg-gray-100 inline rounded-md">
                          Freelance
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-32">
        <div className="space-y-8">
          <h2 className="text-2xl md:text-6xl font-bold">From the blog</h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 rounded-lg gradient mb-8 shadow-2xl">
          <div className="flex justify-center space-x-6 md:order-2">
            {/*Social media*/}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-white">
              &copy; 2022 Damien Dumontet, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
});