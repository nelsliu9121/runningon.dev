import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <footer class="flex justify-center fixed inset-x-0 bottom-0 p-12 bg-navy text-grey">
            <a href="https://nelsonliu.dev/" target="_blank">
                Made with 🫰 by Nelson Liu
            </a>
            <span class="mx-2">|</span>
            <a href="https://github.com/nelsliu9121/runningon.dev" target="_blank">
                GitHub
            </a>
        </footer>
    )
});
