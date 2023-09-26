import { router } from '../trpc';
import { authRouter } from './auth';
import { configRouter } from './config';

export const appRouter = router({
  config: configRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
