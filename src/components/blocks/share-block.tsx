import { $, component$, useSignal } from "@builder.io/qwik";
import { checkIfBrowserSupported, takeScreenshot } from "@xata.io/screenshot";

export default component$(() => {
  const image = useSignal<string>();

  const saveAsImage = $(async () => {
    if (checkIfBrowserSupported()) {
      image.value = await takeScreenshot();
    }
  });

  const share = $(() => {
    const data = {
      url: "https://runningon.dev/",
      title: "runningon.dev",
    };

    if (navigator.canShare(data)) {
      navigator.share(data);
    }
  });

  return (
    <section class="bg-[#F2DEBA] transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 grid grid-cols-3 grid-rows-1 gap-4">
      <div
        class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl bg-navy bg-opacity-10 hover:bg-opacity-60 transition-colors"
        onClick$={share}
      >
        <div class="font-mono flex-1 flex items-center">share</div>
      </div>

      <div
        class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl bg-navy bg-opacity-10 hover:bg-opacity-60 transition-colors cursor-pointer"
        onClick$={saveAsImage}
      >
        <div class="font-mono flex-1 flex items-center">save as image</div>

        {image.value ? (
          <a href={image.value} download target="_blank">
            <div class="w-48 h-48 sm:h-36 sm:w-36 rounded-full border-4 border-light shadow-lg hover:shadow-2xl transition-shadow">
              <img
                class="rounded-full object-cover w-full h-full"
                src={image.value}
                alt="screenshot"
              />
            </div>
          </a>
        ) : null}
      </div>
    </section>
  );
});
