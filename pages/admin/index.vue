<script lang="ts" setup>
definePageMeta({
  middleware: ['admin-only'],
});

const currentUser = useAuthUser();
const { $client } = useNuxtApp();

const response = await $client.config.admin.query();
</script>

<template>
  <div class="relative max-h-screen overflow-y-auto">
    <div class="flex flex-row items-center mb-5 mt-[120px]">
      <h1 class="text-xl text-center w-full">{{ response.greeting }}</h1>
    </div>
    {{ JSON.stringify(currentUser, null, ' ') }}
    <div class="w-[120px] mx-auto">
      <Logout />
    </div>
  </div>
</template>
