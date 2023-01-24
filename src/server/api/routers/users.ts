/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const userInput = z.object({
  role: z.string().optional(),
});

export const usersRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const oauth_sid = ctx.session?.user.sid;
    const oauth_sub = ctx.session?.user.sub;
    const user = await ctx.prisma.user.findUnique({
      where: { oauth_sid },
    });

    if (!user)
      return ctx.prisma.user.create({
        data: {
          oauth_sid,
          oauth_sub,
        },
      });

    return user;
  }),

  createUser: protectedProcedure.input(userInput).mutation(({ input, ctx }) => {
    const oauth_sid = ctx.session?.user.sid;
    const oauth_sub = ctx.session?.user.sub;
    console.log("oauth_sid", oauth_sid);
    console.log("oauth_sub", oauth_sub);
    return ctx.prisma.user.create({
      data: {
        ...input,
        oauth_sid,
        oauth_sub,
      },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
