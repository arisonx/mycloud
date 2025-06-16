"use server";

import { actionClient } from "@/lib/safe-actions";
import { SignupSchema } from "@/@types/schemas/signup-schema";
import { z } from "zod";
import { trycatch } from "@/utils/trycatch";
import { signupWithEmailAndPassword } from "@/lib/auth-client";

const UserRegisterActionOutputSchema = z.object({
  error: z.boolean(),
  status: z.number(),
  message: z.string(),
});

export const UserRegisterAction = actionClient
  .inputSchema(SignupSchema)
  .outputSchema(UserRegisterActionOutputSchema)
  .action(async ({ parsedInput }) => {

    const  [error, response] = await trycatch(
      signupWithEmailAndPassword(parsedInput.email, parsedInput.password, parsedInput.name)
    );

    if (error) {
      return {
        error: true,
        status: 500,
        message: "Tivemos um erro interno. Caso o erro persista contate o suporte.",
      };
    }

    return {
      error: false,
      status: 201,
      message: "Cadastro realizado com sucesso!",
    };
  });
