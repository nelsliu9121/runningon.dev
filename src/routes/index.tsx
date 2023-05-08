import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="grid auto-rows-fr grid-cols-2 gap-4 p-24 pb-36 h-screen">
            <div class="bg-[#EA047E] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">A</div>
            <div class="bg-[#FF6D28] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">B</div>
            <div class="bg-[#FCE700] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">C</div>
            <div class="bg-[#00F5FF] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">D</div>
            <div class="bg-[#2DCDDF] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">E</div>
            <div class="bg-[#F2DEBA] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-24 flex justify-center items-center text-6xl">F</div>
        </div>
    );
});
