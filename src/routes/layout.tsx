import { component$, Slot } from '@builder.io/qwik';

import Footer from '@/components/common/footer';

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
