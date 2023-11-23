<script setup lang="ts"></script>

<template>
  <ul
    class="fixed bottom-0 left-0 right-0 w-full transition-colors duration-400 bg-base-container border-t border-base-border py-5 px-16 flex justify-between"
  >
    <li v-for="item in 5">
      <NuxtLink
        to="/"
        class="transition-colors duration-400 hover:text-primary"
      >
        <Icon name="i-ph-house-bold"/>
        <span class="hidden">主页</span>
      </NuxtLink>
    </li>
  </ul>
</template>
