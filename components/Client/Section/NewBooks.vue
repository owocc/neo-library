<template>
  <section class="pt-16 lg:pt-32">
    <h2 class="text-center text-4xl mb-4 lg:mb-16">New Books</h2>
    <div class="px-6 max-w-6xl mx-auto">
      <Swiper
        v-for="n in 2"
        class="w-full overflow-hidden first:mb-8"
        slidesPerView="auto"
        :spaceBetween="16"
        :breakpoints="{
          1150: {
            slidesPerView: 3,
          },
        }"
      >
        <SwiperSlide v-for="item in 10">
          <a
            href="#"
            class="flex items-center gap-x-10 py-6 px-4 border-2 bg-base-container border-base-border transition-colors duration-400 hover:border-base"
          >
            <img src="/img/book-1.png" alt="" class="w-[100px]" />
            <div>
              <h2 class="text-xl mb-2">New Book</h2>
              <div class="flex items-center gap-x-3 mb-3">
                <span class="text-base-title">$7.99</span>
                <span class="text-sm line-through">$14.99</span>
              </div>

              <div class="text-primary">
                <Icon name="i-ph-star-four-duotone" />
                <Icon name="i-ph-star-four-duotone" />
                <Icon name="i-ph-star-four-duotone" />
                <Icon name="i-ph-star-four-duotone" />
                <Icon name="i-ph-star-four" />
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
