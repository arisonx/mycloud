import { createAuthClient } from "better-auth/client";
const authClient = createAuthClient();

type signupWithEmailAndPasswordProps = {
  email: string;
  password: string;
  name: string;
};

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const data = await authClient.signIn.email(
    {
      email,
      password,
    },
    {
      onRequest(context) {
        const { body } = context.body;

        console.log("onRequest", body);
      },
      onResponse(context) {
        console.log("onResponse", context);
      },
      onError(context) {
        console.log("onError", context);
      },
    }
  );
};

export const signupWithEmailAndPassword = async (
  email: string,
  password: string,
  name: string
) => {
  const data = await authClient.signUp.email(
    {
      email,
      password,
      name,
    },
    {
      onRequest(context) {
        context.url = `${process.env.NEXT_PUBLIC_API_URL}/users/signup`;
      },
      body: {
        email: email,
        password: password,
        name: name,
      },
    }
  );

  console.log(data);
};
