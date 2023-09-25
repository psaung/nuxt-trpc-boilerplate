<template>
  <div className="relative max-h-screen overflow-y-auto">
    <form @submit="register">
      <div>
        <label for="firstName">Frist Name</label>
        <input type="text" id="firstName" v-model="formValues.firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="formValues.lastName" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formValues.email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formValues.password" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="phone" id="phone" v-model="formValues.phone" />
      </div>
      <div>
        <label for="address">Address</label>
        <input type="address" id="address" v-model="formValues.address" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { $client } = useNuxtApp();
const formValues = ref<{
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}>({
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  phone: '',
  address: '',
});
const register = async () => {
  await $client.auth.register.mutate({
    firstName: formValues.value.firstName,
    lastName: formValues.value.lastName,
    password: formValues.value.password,
    email: formValues.value.email,
    phone: formValues.value.phone,
    address: formValues.value.address,
  });
};
</script>
