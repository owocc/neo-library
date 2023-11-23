<template>
  <!-- 搜索弹出 -->
  <div
    class="fixed z-50 left-0 w-full h-full bg-gray-100 bg-opacity-60 backdrop-blur-lg py-32 px-6 -top-full"
  >
    <form
      action=""
      class="flex items-center gap-x-2 bg-base-container border-2 border-base-border pl-4"
    >
      <Icon name="i-ph-magnifying-glass" class="text-base-title" />
      <input
        class="w-full pr-4 py-4 bg-base-container"
        placeholder="请输入你想搜索的书籍"
      />
    </form>
    <Icon
      name="i-ph-x"
      class="absolute top-8 right-8 text-base-title cursor-pointer"
    />
  </div>
</template>
