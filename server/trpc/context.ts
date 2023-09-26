import { inferAsyncReturnType } from '@trpc/server';
import { H3Event } from 'h3';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = (opts: H3Event) => {
  return opts;
};

export type Context = inferAsyncReturnType<typeof createContext>;
