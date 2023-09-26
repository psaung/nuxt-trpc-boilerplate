<template>
  <form @submit.prevent="handleLogin">
    <div class="flex w-full flex-col gap-y-2">
      <div class="relative z-0 w-full text-base-regular">
        <label for="email" class="mb-4 text-gray-500">Email</label>
        <input
          type="email"
          id="email"
          v-model="formValues.email"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="email"
          required
        />
      </div>
      <div class="relative z-0 w-full text-base-regular">
        <label for="password" class="mb-4 text-gray-500">Password</label>
        <input
          type="password"
          id="password"
          v-model="formValues.password"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          required
        />
      </div>
    </div>
    <div>
      <input
        type="submit"
        value="Submit"
        class="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 bg-gradient-to-r from-from_gradient to-to_gradient text-white mt-6"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import type { loginProps } from '~/utils/types/app';

const props = defineProps<{
  onSubmit: (params: loginProps) => void;
}>();

const formValues = ref<loginProps>({
  password: '',
  email: '',
  rememberMe: false,
});

const handleLogin = () => {
  props.onSubmit({
    email: formValues.value.email,
    password: formValues.value.password,
    rememberMe: formValues.value.rememberMe,
  });
};
</script>
