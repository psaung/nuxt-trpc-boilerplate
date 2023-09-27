export default defineNuxtRouteMiddleware(async () => {
  const user = useAuthUser();

  switch (user?.value?.role) {
    case 'Admin':
      return navigateTo({ name: 'admin' });
    case 'User':
      return navigateTo({ name: 'app' });
  }
});
