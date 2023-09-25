<template>
  <div className="relative max-h-screen overflow-y-auto">
    {{ error }}
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formValues.email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formValues.password" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>

    <div @click="handleLogout">Logout</div>
  </div>
</template>

<script lang="ts" setup>
const { login, logout } = useAuth();

const error = ref('');

const formValues = ref<{
  password: string;
  email: string;
  rememberMe?: boolean;
}>({
  password: '',
  email: '',
  rememberMe: false,
});
const handleLogin = async () => {
  error.value = '';
  const response = await login(
    formValues.value.email,
    formValues.value.password
  );
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

const handleLogout = async () => {
  await logout();
};
</script>
