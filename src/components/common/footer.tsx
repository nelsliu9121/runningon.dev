import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="flex gap-x-2 justify-center fixed inset-x-0 bottom-0 p-4 xl:p-12 bg-navy text-grey">
      <a href="https://nelsonliu.dev/" target="_blank">
        Made with 🫰 by Nelson Liu in Taipei, Taiwan
      </a>
      <span>|</span>
      <a href="https://github.com/nelsliu9121/runningon.dev" target="_blank">
        GitHub
      </a>
    </footer>
  );
});
