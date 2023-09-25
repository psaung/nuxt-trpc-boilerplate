import type { User } from '@prisma/client';

export type UserWithoutPassword = Omit<User, 'password'>;

export const useAuthUser = () => {
  return useState<UserWithoutPassword | null>('user', () => null);
};
