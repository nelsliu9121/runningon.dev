import { $, component$, useOnDocument, useStore } from "@builder.io/qwik";

const useHostInformation = () => {
  const store = useStore({
    platform: "",
    memory: "",
    online: false,
  });

  useOnDocument(
    "load",
    $(() => {
      store.platform = navigator.platform;
      // @ts-ignore
      store.memory = navigator.deviceMemory ?? "-";
      store.online = navigator.onLine;
    })
  );

  return store;
};

export default component$(() => {
  const host = useHostInformation();

  return (
    <section class="bg-[#FF6D28] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 flex flex-col justify-center items-stretch">
      <h3 class="text-2xl mb-4">Host</h3>

      <div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 flex-1">
        <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
          <h5 class="text-lg">platform</h5>
          <div class="font-mono flex-1 flex items-center">{host.platform}</div>
        </div>
        <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
          <h5 class="text-lg">memory</h5>
          <div class="font-mono flex-1 flex items-center">{host.memory}</div>
        </div>
        <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
          <h5 class="text-lg">online</h5>
          <div class="font-mono flex-1 flex items-center">
            {host.online ? "✅" : "❎"}
          </div>
        </div>
      </div>
    </section>
  );
});
