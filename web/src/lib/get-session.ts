import { auth } from "@/lib/auth"
import { headers } from "next/headers";

export const getServerSession = async () => {
  "use server";
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};
