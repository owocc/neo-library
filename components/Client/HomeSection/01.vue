<template>
  <section>
    <div class="px-6 grid pt-8 gap-y-10">
      <div class="text-center">
        <h1 class="text-4xl mb-4">
          Browse & <br />
          Select E-Books
        </h1>
        <p class="mb-8">
          Find the best e-books from your favorite writers, explore hundreds of
          books with all possible categories, take advantage of the 50% discount
          and much more.
        </p>
        <a class="inline-block bg-primary text-white font-semibold py-4 px-12">Explore Now</a>
      </div>

      <div>
        <!-- swiper -->
        <div class="grid">
          <!-- swiper item -->
          <Swiper :loop='true' class="bg-red-500">

            <SwiperSlide v-for="item in 4" class="w-[220px] transition-transform duration-400 scale-80">
              <img :src="`/img/home-book-${item + 1}.png`" alt="" class="w-[220px] transition-transform duration-400" />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
