import { component$, Slot } from '@builder.io/qwik';

import Footer from '@/components/common/footer';

export default component$(() => {
  return (
    <>
      <main class="mb-16 xl:mb-0">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
