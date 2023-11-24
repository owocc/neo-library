<script setup>
// const SwiperNavigation
</script>
<template>
  <section class="pt-16 lg:pts-32">
    <h2 class="text-center text-4xl mb-4 lg:mb-16">Featured Books</h2>
    <div class="px-6 max-w-6xl mx-auto">
      <Swiper
        class="w-full overflow-hidden"
        slidesPerView="auto"
        :spaceBetween="16"
        centeredSlides
        grabCursor
        :breakpoints="{
          1150: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }"
      >
        <SwiperSlide v-for="item in 10">
          <article
            class="text-center overflow-hidden bg-base-container relative p-8 border-2 border-base-border transition-colors duration-400 group"
          >
            <img src="/img/book-1.png" alt="" class="w-[150px] m-auto mb-3" />
            <h2 class="text-xl mb-2">Featured Book</h2>
            <div class="flex justify-center gap-x-3 items-center mb-5">
              <span class="text-base-title">$11.99</span>
              <span class="text-sm line-through">$19.99</span>
            </div>
            <button
              class="inline-block bg-primary text-white font-semibold py-4 px-12"
            >
              Add To Cart
            </button>
            <div
              class="inline-flex flex-col absolute -right-6 top-8 transition-all duration-400 group-hover:right-6"
            >
              <button class="text-xl text-primary cursor-pointer">
                <Icon name="i-ph-magnifying-glass" />
              </button>
              <button class="text-xl text-primary cursor-pointer">
                <Icon name="i-ph-heart-straight" />
              </button>
              <button class="text-xl text-primary cursor-pointer">
                <Icon name="i-ph-eye" />
              </button>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
