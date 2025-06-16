"use server";

import { actionClient } from "@/lib/safe-actions";
import { SignupSchema } from "@/@types/schemas/signup-schema";
import { z } from "zod";
import { trycatch } from "@/utils/trycatch";

const UserRegisterActionOutputSchema = z.object({
  error: z.boolean(),
  status: z.number(),
  message: z.string(),
});

export const UserRegisterAction = actionClient
  .inputSchema(SignupSchema)
  .outputSchema(UserRegisterActionOutputSchema)
  .action(async ({ parsedInput }) => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/signup`;

    const [error, response] = await trycatch(
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedInput),
      })
    );

    if (response?.status !== 201 || error) {
      return {
        error: true,
        status: response?.status || 500,
        message:
          error?.message ||
          "Tivemos um erro interno. Caso o erro persista contate o suporte.",
      };
    }

    return {
      error: false,
      status: response.status,
      message: "Cadastro realizado com sucesso!",
    };
  });
