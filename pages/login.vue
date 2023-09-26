<template>
  <div class="relative max-h-screen overflow-y-auto">
    <div class="flex w-full justify-center py-24 flex-col">
      <div class="flex flex-row items-center mb-5">
        <h1 class="text-xl text-center w-full">Sign In</h1>
      </div>
      <LoginForm :on-submit="handleLogin" />
      <div class="text-red-600 my-2 text-center">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { loginProps } from '~/utils/types/app';

const { login } = useAuth();

const error = ref('');

const handleLogin = async (value: loginProps) => {
  error.value = '';
  const response = await login(value.email, value.password);
  console.log(value);

  if (!response.user) {
    error.value = response.message;
    return;
  }
  if (response.user?.role === 'Admin') {
    navigateTo('/admin');
    return;
  }
  navigateTo('/app');
};
</script>
