<script lang="ts" setup>
definePageMeta({
  middleware: ['user-only'],
});

const currentUser = useAuthUser();
</script>

<template>
  <div>
    {{ JSON.stringify(currentUser) }}
  </div>
</template>
