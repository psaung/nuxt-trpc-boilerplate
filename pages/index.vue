<template>
  <div>Welcome From {{ response.greeting }}</div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const response = await $client.hello.query({ text: 'KbLab' });
</script>
