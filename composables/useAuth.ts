import { useAuthUser } from './useAuthUser';

export const useAuth = () => {
  const authUser = useAuthUser();
  const { $client } = useNuxtApp();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const login = async (email: string, password: string, rememberMe = false) => {
    const data = await $client.auth.login.mutate({
      password,
      email,
      rememberMe,
    });

    if (data.user && data.user.id) {
      setUser(data?.user);
    }

    // Return a default value for authUser if data?.user is not present.
    return data;
  };

  const logout = async () => {
    const user = await $client.auth.logout.mutate();

    setUser(user.user);
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $client.auth.me.query();
        setUser(data.user);
      } catch (error) {
        setCookie(null);
      }
    }
  };

  return {
    login,
    logout,
    me,
  };
};
