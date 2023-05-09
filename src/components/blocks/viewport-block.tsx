import {$, component$, useOnDocument, useOnWindow, useStore} from "@builder.io/qwik";

const useViewportSize = () => {
    const store = useStore({
        width: 0,
        height: 0,
        pixelRatio: 1,
    });

    useOnWindow('resize', $((event) => {
        const w = event.target as Window;

        store.width = w.innerWidth;
        store.height = w.innerHeight;
    }));

    useOnDocument('load', $((event) => {
        const d = event.target as Element | null | undefined;

        if (d?.ownerDocument?.defaultView) {
            const w = d.ownerDocument.defaultView;

            store.width = w.innerWidth;
            store.height = w.innerHeight;
            store.pixelRatio = w?.devicePixelRatio ?? 1;
        }
    }));

    return store;
}

export default component$(() => {
    const size = useViewportSize();

    return (
        <section class="bg-[#EA047E] hover:bg-opacity-60 transition-colors bg-opacity-5 rounded-2xl p-6 xl:p-18 flex flex-col justify-center items-stretch">
            <h3 class="text-2xl mb-4">Viewport</h3>

            <div class="grid grid-cols-3 auto-rows-fr gap-4 flex-1">
                <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
                    <h5 class="text-lg">height</h5>
                    <div class="font-mono flex-1 flex items-center">
                        {size.height}
                    </div>
                </div>
                <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
                    <h5 class="text-lg">width</h5>
                    <div class="font-mono flex-1 flex items-center">
                        {size.width}
                    </div>
                </div>
                <div class="p-4 xl:p-8 flex flex-col justify-between items-center border-1 rounded-2xl">
                    <h5 class="text-lg">font size</h5>
                    {Array(3).fill(0).map((v, index) =>
                        (<div key={`fontsize-${index}`} class="font-mono bg-navy" style={{fontSize: `${Math.pow(2, index)}rem`}}>
                            {Math.pow(2, index)}rem
                        </div>)
                    )}
                </div>
                <div class="p-4 xl:p-8 flex flex-col justify-center items-center border-1 rounded-2xl">
                    <h5 class="text-lg">device pixel ratio</h5>
                    <div class="font-mono flex-1 flex items-center">
                        {size.width}
                    </div>
                </div>
            </div>
        </section>
    );
});
