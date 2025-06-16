import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [nextCookies()],

  user: {
    create: async (user: any) => {
      console.log(user);
    },

    update: async (user: any) => {
      console.log(user);
    },

    modelName: "user",
    fields: {
      name: "string",
      email: "string",
      createdAt: "date",
      updatedAt: "date",
      emailVerified: "boolean",
      image: "string",
    },
    

 /*    deleteUser: async (user: any) => {
      console.log(user);
    }, */
  },

  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
