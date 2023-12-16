<script setup lang="ts">
const ActionList = [
  {
    icon: "i-ph-magnifying-glass",
  },
  {
    icon: "i-ph-user",
  },
  // {
  //   icon: "i-ph-moon",
  // },
];
</script>

<template>
  <!-- 操作按钮 -->
  <div class="flex items-center gap-x-4 text-xl">
    <!-- 操作 -->
    <Icon
      :name="action.icon"
      v-for="action in ActionList"
      class="text-base-title transition-colors duration-400 cursor-pointer hover:text-primary"
    />
  </div>
</template>
