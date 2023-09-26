import { z } from 'zod';
import {
  adminProtectedProcedure,
  protectedProcedure,
  publicProcedure,
  router,
} from '../trpc';

export const configRouter = router({
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
  user: protectedProcedure.query(() => {
    return {
      greeting: `hello user`,
    };
  }),
  admin: adminProtectedProcedure.query(() => {
    return {
      greeting: `hello admin`,
    };
  }),
});

export type ConfigRouter = typeof configRouter;
