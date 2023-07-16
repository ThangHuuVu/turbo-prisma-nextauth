import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "database";
import { Adapter } from "next-auth/adapters";

export default NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});