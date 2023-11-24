<template>
  <section class="pt-16 lg:py-32">
    <div class="px-6 grid gap-y-12 md:grid-cols-3 max-w-6xl mx-auto">
      <article v-for="item in 3" class="text-center">
        <Icon
          name="i-ph-cloud-arrow-down"
          class="block w-12 h-12 mx-auto mb-4 text-primary"
        />
        <h3 class="mb-2">Free Shipping</h3>
        <p>Order More Than $100</p>
      </article>
    </div>
  </section>
</template>
