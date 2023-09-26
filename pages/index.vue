<template>
  <div>Welcome From {{ response.greeting }}</div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const response = await $client.config.hello.query({ text: 'Nuxt Boilerplate' });
</script>
