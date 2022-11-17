import { component$ } from "@builder.io/qwik";
import Nav from "~/components/nav";
import UnderConstruction from "~/components/under_construction";

export default component$(() => {
  return (
    <div className="bg-zinc-50 sm:px-28">
      <div className="mx-auto max-w-7xl sm:px-10 lg:px-20 bg-white ring-1 ring-zinc-100 pb-16 min-h-screen">
        <Nav></Nav>
        <div className="px-4 py-24 flex items-center h-full">
          <UnderConstruction></UnderConstruction>
        </div>
      </div>
    </div>
  );
});
