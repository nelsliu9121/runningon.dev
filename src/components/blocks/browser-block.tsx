import {$, component$, useOnDocument, useStore} from "@builder.io/qwik";

const useBrowserInformation = () => {
    const store = useStore({
        userAgent: '',
    })

    useOnDocument('load', $(() => {
        store.userAgent = navigator.userAgent;
    }));

    return store;
}

export default component$(() => {
    const browser = useBrowserInformation();

    return (<section class="bg-[#FF6D28] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 flex flex-col justify-center items-stretch">
        <h3 class="text-2xl mb-4">Browser</h3>

        <div class="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-4 flex-1">
            <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl col-span-3">
                <h5 class="text-lg">user agent</h5>
                <div class="font-mono flex-1 flex items-center">
                    {browser.userAgent}
                </div>
            </div>
        </div>
    </section>);
});
