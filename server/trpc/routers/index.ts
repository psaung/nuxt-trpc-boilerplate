import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';
import { authRouter } from './auth';

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    }),
  test: protectedProcedure.query(() => {
    return {
      greeting: `hello`,
    };
  }),
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
