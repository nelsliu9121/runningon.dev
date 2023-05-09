import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import ViewportBlock from "@/components/blocks/viewport-block";
import BrowserBlock from "@/components/blocks/browser-block";
import HostBlock from "@/components/blocks/host-block";
import ShareBlock from "@/components/blocks/share-block";

export default component$(() => {
  return (
    <div class="grid auto-rows-fr grid-cols-1 xl:grid-cols-2 gap-4 p-6 xl:p-18 xl:pb-36 xl:h-screen">
      <ViewportBlock />

      <BrowserBlock />

      <HostBlock />

      {/*<section class="bg-[#00F5FF] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 flex justify-center items-center text-6xl">D</section>*/}
      {/*<section class="bg-[#2DCDDF] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 flex justify-center items-center text-6xl">E</section>*/}

      <ShareBlock />
    </div>
  );
});

export const head: DocumentHead = {
  title: "runningon.dev",
  meta: [
    {
      name: "description",
      content: "See the platform details this user is running on.",
    },
  ],
};
