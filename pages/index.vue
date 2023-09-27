<template>
  <div class="text-center mt-[120px]">
    <p class="mb-5">Welcome From {{ response.greeting }}</p>
    <NuxtLink
      to="/Login"
      class="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 bg-gradient-to-r from-from_gradient to-to_gradient text-white mt-6"
    >
      Login
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const response = await $client.config.hello.query({
  text: 'Nuxt TRPC Boilerplate',
});
</script>
