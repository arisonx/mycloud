import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const data = await authClient.signIn.email({
    email,
    password,
  });
};
