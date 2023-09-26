<template>
  <form @submit.prevent="register">
    <div class="flex w-full flex-col gap-y-2">
      <div class="relative z-0 w-full text-base-regular">
        <label for="firstName" class="mb-4 text-gray-500">First Name</label>
        <input
          type="text"
          id="firstName"
          v-model="formValues.firstName"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="firstName"
          required
        />
      </div>
      <div class="relative z-0 w-full text-base-regular">
        <label for="lastName" class="mb-4 text-gray-500">Last Name</label>
        <input
          type="text"
          id="lastName"
          v-model="formValues.lastName"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="firstName"
          required
        />
      </div>
      <div class="relative z-0 w-full text-base-regular">
        <label for="email" class="mb-4 text-gray-500">Email</label>
        <input
          type="email"
          id="email"
          v-model="formValues.email"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="firstName"
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
          autocomplete="firstName"
          required
        />
      </div>
      <div class="relative z-0 w-full text-base-regular">
        <label for="phone" class="mb-4 text-gray-500">Phone</label>
        <input
          type="phone"
          id="phone"
          v-model="formValues.phone"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="firstName"
          required
        />
      </div>
      <div class="relative z-0 w-full text-base-regular">
        <label for="address" class="mb-4 text-gray-500">Address</label>
        <input
          type="address"
          id="address"
          v-model="formValues.address"
          class="py-3 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
          autocomplete="firstName"
          required
        />
      </div>
      <div>
        <input
          type="submit"
          value="Submit"
          class="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 bg-gradient-to-r from-from_gradient to-to_gradient text-white mt-6"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import type { registerProps } from '~/utils/types/app';

const props = defineProps<{
  onSubmit: (params: registerProps) => void;
}>();

const formValues = ref<registerProps>({
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phone: '',
  address: '',
});

const handleLogin = () => {
  props.onSubmit({
    firstName: formValues.value.firstName,
    lastName: formValues.value.lastName,
    password: formValues.value.password,
    email: formValues.value.email,
    phone: formValues.value.phone,
    address: formValues.value.address,
  });
};
</script>
