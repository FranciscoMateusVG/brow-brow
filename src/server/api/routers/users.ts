/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const userInput = z.object({
  role: z.string().optional(),
});

export const usersRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const oauth_sub = ctx.session?.user.sub;
    const user = await ctx.prisma.user.findUnique({
      where: { oauth_sub },
      include: {
        Ficha: true,
      },
    });

    if (!user)
      return ctx.prisma.user.create({
        data: {
          oauth_sub,
          name: removeEmail(ctx.session?.user.name as string),
        },
      });

    return user;
  }),

  getUsers: protectedProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany({
      include: {
        Ficha: true,
      },
    });
    return users;
  }),

  createUser: protectedProcedure.input(userInput).mutation(({ input, ctx }) => {
    const oauth_sub = ctx.session?.user.sub;

    return ctx.prisma.user.create({
      data: {
        ...input,
        oauth_sub,
      },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

function removeEmail(myString: string) {
  if (
    myString.search(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/) !== -1
  ) {
    // Remove it...
    myString = myString.replace(/@([^.@\s]+\.)+([^.@\s]+)/, "");
    return myString; // Hello, my email is
  }
}
