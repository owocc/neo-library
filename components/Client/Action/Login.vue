<template>
  <div
    class="grid fixed z-50 left-0 w-full h-full bg-gray-100 bg-opacity-60 backdrop-blur-lg py-32 px-6 -top-full items-center text-center gap-6"
  >
    <form
      action=""
      class="bg-base-container grid gap-y-6 border-2 border-base-border py-8 px-6"
    >
      <h3 class="text-xl">登录</h3>
      <div class="grid gap-y-6">
        <div>
          <label for="" class="block text-left text-base-title font-medium mb-1"
            >邮箱</label
          >
          <input
            type="email"
            placeholder="请输入账号邮箱"
            class="form-input w-full bg-base-container border-2 border-base-border p-4"
          />
        </div>

        <div>
          <label for="" class="block text-left text-base-title font-medium mb-1"
            >密码</label
          >
          <input
            type="email"
            placeholder="请输入密码"
            class="form-input w-full bg-base-container border-2 border-base-border p-4"
          />
        </div>
      </div>

      <div>
        <span class="block text-sm mb-2"
          >是否还没有账号? <a class="text-primary font-medium">注册</a></span
        >
        <a class="block text-sm text-primary mb-5" href="">密码忘记了?</a>
        <button
          type="submit"
          class="inline-block bg-primary text-white font-semibold py-4 px-12 w-full"
        >
          登录
        </button>
      </div>
    </form>

    <Icon
      name="i-ph-x"
      class="absolute top-8 right-8 text-base-title cursor-pointer"
    />
  </div>
</template>
