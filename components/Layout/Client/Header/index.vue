<script setup lang="ts">
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { clsx } from "clsx";
import { breakpointsTailwind } from "@vueuse/core";
console.log(breakpointsTailwind);
const showBg = ref(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndSmaller = breakpoints.smallerOrEqual("sm");
onMounted(async () => {
  await nextTick(() => {
    gsap.registerPlugin(Observer);
    Observer.create({
      target: window,
      type: "scroll",
      onChangeY(e) {
        showBg.value = e.scrollY() > 50;
      },
    });
  });
});
</script>
<template>
  <header
    :class="
      clsx(
        'z-40 px-6 sticky w-full top-0 left-0 transition-all before:fixed before:left-0 before:w-full before:h-nav  before:top-0 before:-z-10 before:backdrop-blur-lg',
        showBg && 'bg-base-body bg-opacity-50  border-b border-base-border'
      )
    "
  >
    <nav class="h-nav flex max-w-7xl mx-auto justify-between items-center">
      <CommonLogo />
      <div class="flex items-center">
        <!-- <Teleport to="body"> -->
        <LayoutClientHeaderMenuList />
        <!-- </Teleport> -->
        <LayoutClientHeaderActions />
      </div>
    </nav>
  </header>
</template>
