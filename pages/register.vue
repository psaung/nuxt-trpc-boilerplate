<template>
  <div class="relative max-h-screen overflow-y-auto">
    <div class="flex w-full justify-center py-24 flex-col">
      <div class="flex flex-row items-center mb-5">
        <h1 class="text-xl text-center w-full">Register</h1>
      </div>
      <RegisterForm :on-submit="register" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { registerProps } from '~/utils/types/app';

const { $client } = useNuxtApp();
const register = async (value: registerProps) => {
  await $client.auth.register.mutate({
    firstName: value.firstName,
    lastName: value.lastName,
    password: value.password,
    email: value.email,
    phone: value.phone,
    address: value.address,
  });
};
</script>
