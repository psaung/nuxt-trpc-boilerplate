<script lang="ts" setup>
definePageMeta({
  middleware: ['admin-only'],
});

const currentUser = useAuthUser();
</script>

<template>
  <div>
    <h3>Admin Panel</h3>
    <div>{{ JSON.stringify(currentUser) }}</div>
  </div>
</template>
