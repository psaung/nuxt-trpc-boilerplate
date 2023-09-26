<template>
  <button
    class="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 bg-gradient-to-r from-from_gradient to-to_gradient text-white mt-6"
    @click="handleLogout"
  >
    Logout
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    url?: string;
  }>(),
  {
    url: '/login',
  }
);

const { logout } = useAuth();

const handleLogout = async () => {
  await logout();
  navigateTo(props.url);
};
</script>
