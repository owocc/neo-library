<script setup>
const images = [
  "/img/home-book-1.png",
  "/img/home-book-2.png",
  "/img/home-book-3.png",
  "/img/home-book-4.png",
];
</script>
<template>
  <section class="lg:py-32">
    <div
      class="px-6 grid pt-8 gap-y-10 max-w-7xl mx-auto lg:grid-cols-[max-content,1fr] lg:gap-x-12"
    >
      <div class="text-center lg:text-left max-w-md mx-auto">
        <h1 class="text-4xl mb-4">
          公共,任何人都可以访问的 <br />
          图书API
        </h1>
        <p class="mb-8">
          使用公共的API，您可以轻松地将图书信息集成到您的应用程序中。
        </p>
        <a class="inline-block bg-primary text-white font-semibold py-4 px-12"
          >查看接口列表</a
        >
      </div>

      <div>
        <!-- swiper -->
        <div class="grid w-full overflow-hidden">
          <!-- swiper item -->
          <Swiper
            :modules="[SwiperAutoplay]"
            class="!w-full !max-w-xl !lg:max-w-3xl"
            slidesPerView="auto"
            :spaceBetween="-24"
            centeredSlides
            grabCursor
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              1220: {
                spaceBetween: -32,
              },
            }"
          >
            <!-- w-[220px] lg:w-[280px] -->
            <SwiperSlide
              class="w-full lg:w-[280px]"
              v-for="item in images"
              v-slot="{ isActive }"
            >
              <article
                class="w-full transition-transform duration-400"
                :class="{ 'scale-80': !isActive }"
              >
                <img
                  :src="item"
                  alt=""
                  class="w-full transition-transform duration-400"
                />
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
