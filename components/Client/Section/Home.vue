<script setup></script>
<template>
  <section class="lg:py-32">
    <div
      class="px-6 grid pt-8 gap-y-10 max-w-7xl mx-auto lg:grid-cols-[max-content,1fr] lg:gap-x-12"
    >
      <div class="text-center lg:text-left max-w-md mx-auto">
        <h1 class="text-4xl mb-4">
          Browse & <br />
          Select E-Books
        </h1>
        <p class="mb-8">
          Find the best e-books from your favorite writers, explore hundreds of
          books with all possible categories, take advantage of the 50% discount
          and much more.
        </p>
        <a class="inline-block bg-primary text-white font-semibold py-4 px-12"
          >Explore Now</a
        >
      </div>

      <div>
        <!-- swiper -->
        <div class="grid w-full overflow-hidden">
          <!-- swiper item -->
          <Swiper
            :modules="[SwiperAutoplay]"
            class="w-full max-w-xl lg:max-w-3xl"
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
            <SwiperSlide
              class="w-[220px] lg:w-[280px]"
              v-for="item in 5"
              v-slot="{ isActive }"
            >
              <article
                class="w-full transition-transform duration-400"
                :class="{ 'scale-80': !isActive }"
              >
                <img
                  src="/img/home-book-1.png"
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
