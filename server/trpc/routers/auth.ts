import { z } from 'zod';
import _ from 'lodash';

import { Prisma } from '@prisma/client';
import { protectedProcedure, publicProcedure, router } from '../trpc';
import { prisma } from '~/server/db';

interface PrismaError extends Error {
  code: string;
  meta?: {
    target?: string[];
  };
}

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        password: z.string(),
        email: z.string().min(1).email(),
        phone: z.string(),
        address: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        await prisma.user.create({
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            password: await hash(input.password),
            email: input.email,
            phone: input.phone,
            address: input.address,
          },
        });
      } catch (error: unknown) {
        const prismaError = error as PrismaError;

        if (
          prismaError.code === 'P2002' &&
          prismaError.meta?.target?.includes('phone')
        ) {
          throw new Error('Phone number is already registered');
        }

        if (
          prismaError.code === 'P2002' &&
          prismaError.meta?.target?.includes('email')
        ) {
          throw new Error('Email is already registered');
        }

        if (
          error instanceof Prisma.PrismaClientUnknownRequestError &&
          error.message.includes('Failed to connect')
        ) {
          throw new Error('Internet connection failed!');
        }

        throw new Error('Registration failed!');
      }
    }),

  me: publicProcedure.query(async ({ ctx }) => {
    const context = ctx.context.user;
    if (!context || !context.userId) {
      return {
        user: null,
      };
    }
    const user = await prisma.user.findFirst({
      where: { id: context.userId },
    });

    return {
      user: user ? _.omit(user, 'password') : null,
    };
  }),

  login: publicProcedure
    .input(
      z.object({
        email: z.string().min(1).email(),
        password: z.string(),
        rememberMe: z.boolean().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { email, password, rememberMe } = input;
      const user = await prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return {
          statusCode: 401,
          message: 'Bad credentials',
          user: null,
        };
      }

      const verified = await verify(password, user.password);
      if (!verified) {
        return {
          statusCode: 401,
          message: 'Bad credentials',
          user: null,
        };
      }

      const config = useRuntimeConfig();
      const session = serialize({ userId: user.id, role: user.role });
      const signedSession = sign(session, config.cookieSecret);

      setCookie(ctx, config.cookieName, signedSession, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: rememberMe
          ? new Date(Date.now() + config.cookieRememberMeExpires)
          : new Date(Date.now() + config.cookieExpires),
      });

      return {
        user: _.omit(user, 'password'),
      };
    }),

  logout: protectedProcedure.mutation(async ({ ctx }) => {
    const config = useRuntimeConfig();

    deleteCookie(ctx, config.cookieName, {
      httpOnly: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });

    return {
      user: null,
    };
  }),
});
